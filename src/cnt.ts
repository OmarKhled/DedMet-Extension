import Timeline from "./timelineInterface";
import visualPaint from "./visualPaint";

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
