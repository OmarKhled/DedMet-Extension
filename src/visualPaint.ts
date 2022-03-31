import Timeline from "./timelineInterface";

import li from "./html/EventElement.ejs";

export default (timeline: Timeline): void => {
  // * Fetching the element before which the timeline will be added
  const container: Element | null = document.querySelector(
    "aside#block-region-side-post"
  );
  const calendar: Element | null = document.querySelector(
    "section.block_calendar_month"
  );

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
  console.log(filteredTimeline);
  const timelineElement: HTMLDivElement = document.createElement("div");
  timelineElement.innerHTML = li({ timeline: filteredTimeline });

  container?.insertBefore(timelineElement, calendar);
};
