import timelineFetchOptions from "./timelineFetchOptions";

interface requestDetails {
  url: string;
}
// Listener For Http Requests
const listener = ({ url }: requestDetails): void => {
  if (url.includes("core_calendar_get_calendar_monthly_view")) {
    // Getting Session Key
    const sessKey: string = url.split("=")[1].split("&")[0];
    setTimeout(() => {
      // Fetching the current chrome tab
      chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs: chrome.tabs.Tab[]) => {
          // Sending a message to that tab
          chrome.tabs.sendMessage(
            tabs[0].id as number,
            {
              key: sessKey,
              type: "sesskey",
            },
            (res) => {
              console.log(res);
              fetchTimelineData(sessKey, res.cookie);
            }
          );
        }
      );
    }, 200);
  }
};

const fetchTimelineData = async (sesskey: string, cookie: string) => {
  chrome.webRequest.onBeforeRequest.removeListener(listener);
  const json = await fetch(
    `https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,
    timelineFetchOptions(cookie)
  );

  const res = await json.json();
  console.log(res);

  setTimeout(() => {
    chrome.webRequest.onBeforeRequest.addListener(listener, {
      urls: ["<all_urls>"],
    });
  }, 200);

  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: chrome.tabs.Tab[]) => {
      chrome.tabs.sendMessage(tabs[0].id as number, {
        timeline: res,
        type: "timeline",
      });
    }
  );
};

chrome.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["<all_urls>"],
});
