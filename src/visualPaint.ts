import Timeline from "./timelineInterface";

import timelineContainer from "./html/Timeline.ejs";
import timelineEvents from "./html/EventElement.ejs";

export const visualPaint = (timeline: Timeline): void => {
  // * Fetching the element before which the timeline will be added
  const container: Element | null =
    document.querySelector("#timeline .content");

  // * Constructing the container of the timeline
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
                console.log(
                  ["attendance", "open", "expectcompletionon"].includes(
                    event.eventtype
                  ),
                  event.eventtype
                );
                return true;
              }
            }),
          };
        }),
      };
    }),
  };
  const timelineEventsElement: HTMLDivElement = document.createElement("div");
  timelineEventsElement.innerHTML = timelineEvents({
    timeline: filteredTimeline,
  });

  container
    ? (container.innerHTML = timelineEvents({
        timeline: filteredTimeline,
      }))
    : "";
};

export const initTimeline = () => {
  // * Fetching the element before which the timeline will be added
  const container: Element | null = document.querySelector(
    "aside#block-region-side-post"
  );
  const calendar: Element | null = document.querySelector(
    "section.block_calendar_month"
  );

  const timelineElement: HTMLDivElement = document.createElement("div");
  timelineElement.innerHTML = timelineContainer();

  container?.insertBefore(timelineElement, calendar);
};
