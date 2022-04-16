import Timeline from "./timelineInterface";
import { visualPaint, initTimeline } from "./visualPaint";

interface Message {
  type: string;
  key: string;
  timeline: { data: Timeline; error: boolean }[];
}

chrome.runtime.sendMessage({ msg: window.location.pathname }, (res) => {});
chrome.runtime.onMessage.addListener((msg: Message, s, send) => {
  if (msg.type == "sesskey") {
    const cookie: string = document.cookie.split("=")[1];
    console.log(`Session ID: ${msg.key} & Cookie : ${cookie}`);
    send({ cookie });
    initTimeline();
  } else {
    const res: { data: Timeline; error: boolean } = msg.timeline[0];
    console.log(res);
    if (!res.error) {
      const timeline: Timeline = res.data;
      visualPaint(timeline);
    } else {
      console.log("Fetching Error Occured");
    }
  }
  return true;
});
