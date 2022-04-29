import Timeline from "./timelineInterface";

import timelineContainer from "./ejs/Timeline.ejs";
import timelineEvents from "./ejs/EventElement.ejs";

export const visualPaint = (timeline: Timeline): void => {
  // * Fetching the element before which the timeline will be added
  const container: Element | null =
    document.querySelector("#timeline .content");

  // * The function that gets the html content of every event
  const httpGet = (url: string): string => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    while (xmlhttp.readyState !== 4) {
      if (xmlhttp.readyState === 4) {
        return xmlhttp.responseText;
      }
    }
    return xmlhttp.responseText;
  };
  // * Feltering the content of the timeline
  const filteredTimeline: Timeline = {
    ...timeline,
    weeks: timeline.weeks.map((week) => {
      return {
        ...week,
        days: week.days.map((day) => {
          return {
            ...day,
            events: day.events.filter((event) => {
              if (
                day.timestamp + 86400 >= Date.now() / 1000 &&
                !["attendance", "open", "expectcompletionon"].includes(
                  event.eventtype
                )
              ) {
                const eventHtmlRes: string = httpGet(event.url);
                const matches = eventHtmlRes.match(
                  "completed|submitted|Submitted|Finished|Completed"
                );
                console.log(matches?.length, event.name);
                if ((matches?.length as number) > 0) {
                  return false;
                } else {
                  return true;
                }
              }
            }),
          };
        }),
      };
    }),
  };

  document.getElementById("timeline-spinner")?.remove();

  container
    ? (container.innerHTML += timelineEvents({
        timeline: filteredTimeline,
      }))
    : "";
};

export const initTimeline = (invalid?: boolean) => {
  // * Adding the container in case no aside elements exists
  if (!document.querySelector("aside#block-region-side-post")) {
    const aside: HTMLElement = document.createElement("aside");
    aside.setAttribute("id", "block-region-side-post");
    aside.setAttribute("class", "col-3 d-print-none block-region");
    document.querySelector("#region-main")?.setAttribute("class", "col-9");
    document.querySelector("#page-content")?.appendChild(aside);
  }
  // * Fetching the element before which the timeline will be added
  const container: Element | null = document.querySelector(
    "aside#block-region-side-post"
  );
  console.log("container", container);
  const calendar: Element | null = document.querySelector(
    "section.block_calendar_month"
  );

  const timelineElement: HTMLDivElement = document.createElement("div");
  timelineElement.innerHTML = timelineContainer();

  container?.insertBefore(
    timelineElement,
    calendar
      ? calendar
      : document.querySelector("aside#block-region-side-post a:first-child")
  );
  if (invalid) {
    document.getElementById("dedmet")!.innerHTML =
      "Invalid or expired License Key";
  }
};
