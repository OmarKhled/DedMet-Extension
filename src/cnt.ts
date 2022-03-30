import Timeline from "./timelineInterface";
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
    if (!res.error) {
      const timeline: Timeline = res.data;
      timeline.weeks.forEach((week) => {
        week.days.forEach((day) => {
          day.events.forEach((event) => {
            console.log(event.popupname);
          });
        });
      });
    } else {
      console.log("Fetching Error Occured");
    }
  }
});
