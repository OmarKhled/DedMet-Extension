import Timeline, { Event } from "./timelineInterface";
interface Message {
  type: string;
  key: string;
  timeline: { data: Timeline; error: boolean }[];
}

chrome.runtime.onMessage.addListener((msg: Message, s, send) => {
  if (msg.type == "sesskey") {
    const cookie = document.cookie.split("=")[1];
    console.log(`Session ID: ${msg.key} & Cookie : ${cookie}`);
    send({ cookie });
  } else {
    const res = msg.timeline[0];
    console.log(res);
    if (!res.error) {
      const timeline: Timeline = res.data;
      visualPaint(timeline);
    } else {
      console.log("Fetching Error Occured");
    }
  }
});

class EventElement {
  event: Event;
  constructor(e: Event) {
    this.event = e;
  }

  UiElement = (): HTMLDivElement => {
    const container = document.createElement("div");
    const iconContainer = document.createElement("div.icon");
    const infoContainer = document.createElement("div.info");

    const icon = document.createElement("img");
    icon.style.width = "40px";
    icon.src =
      "https://courses.nu.edu.eg/theme/image.php/adaptable/attendance/1628408864/icon";
    iconContainer.appendChild(icon);

    const link = document.createElement("a");
    link.innerHTML = this.event.popupname;
    link.href = this.event.url;
    link.style.display = "bolck";
    infoContainer.appendChild(link);

    container.style.display = "flex";
    container.style.gap = "1rem";

    container.appendChild(iconContainer);
    container.appendChild(infoContainer);

    return container;
  };
}

const visualPaint = (timeline: Timeline): void => {
  const container: Element | null = document.querySelector(
    "aside#block-region-side-post"
  );
  const calendar = document.querySelector("section.block_calendar_month");

  const timelineContainer = document.createElement("div");
  const header = document.createElement("h4");
  header.innerHTML = "Timeline";
  timelineContainer?.appendChild(header);

  timeline.weeks.forEach((week) => {
    week.days.forEach((day) => {
      day.events.forEach((event) => {
        const UiElement: EventElement = new EventElement(event);
        timelineContainer?.appendChild(UiElement.UiElement());
        container?.insertBefore(timelineContainer, calendar);
        // container?.appendChild(UiElement.UiElement());
      });
    });
  });
};
