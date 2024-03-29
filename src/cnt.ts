import Timeline from "../lib/timelineInterface";
import { visualPaint, initTimeline } from "../lib/visualPaint";

interface Message {
  type: string;
  key: string;
  timeline: { data: Timeline; error: boolean }[];
}

chrome.runtime.sendMessage({ msg: window.location.pathname }, (res) => {
  return true;
});
chrome.runtime.onMessage.addListener((msg: Message, s, send) => {
  if (msg.type == "sesskey") {
    const cookie: string = document.cookie.split("=")[1];
    console.log(`Session ID: ${msg.key} & Cookie : ${cookie}`);
    send({ cookie });
    setTimeout(() => {
      initTimeline();
    }, 300);
  } else if (msg.type == "invalidLicense") {
    console.log("invalidLicense");
    setTimeout(() => {
      initTimeline(true);
    }, 300);
  } else {
    const res: { data: Timeline; error: boolean }[] = msg.timeline;
    res.forEach((month) => {
      console.log(res);
      if (!month.error) {
        const timeline: Timeline = month.data;
        visualPaint(timeline);
      } else {
        console.log("Fetching Error Occured");
      }
    });
  }
  return true;
});
