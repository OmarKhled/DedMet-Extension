// window.addEventListener("load", (event) => {
//   chrome.runtime.sendMessage({ loaded: true });
// });
chrome.runtime.onMessage.addListener((msg, sen, send) => {
  if (msg.type == "sesskey") {
    const cookie = document.cookie.split("=")[1];
    console.log(msg.url);
    console.log(`Session ID: ${msg.url} & Cookie : ${cookie}`);
    send({ cookie });
  } else {
    console.log(msg.timeline);
  }

  return true;
});
console.log(document.cookie);
