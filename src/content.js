chrome.runtime.onMessage.addListener((msg, sen, send) => {
  if (msg.type == "sesskey") {
    const cookie = document.cookie.split("=")[1];
    console.log(msg.url);
    console.log(`Session ID: ${msg.url} & Cookie : ${cookie}`);
    send({ cookie });
  } else {
    const timeline = msg.timeline;
    console.log(timeline[0]);
    timeline[0].data.weeks.forEach((week) => {
      week.days.forEach((day) => {
        day.events.forEach((event) => {
          console.log(event.popupname, event.formattedtime);
        });
      });
    });
  }

  return true;
});
console.log(document.cookie);
