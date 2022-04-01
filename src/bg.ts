import timelineFetchOptions from "./timelineFetchOptions";

interface requestDetails {
  url: string;
}
let tabId: number;
// Listener For Http Requests
const listener = ({ url }: requestDetails): void => {
  if (url.includes("core_calendar_get_calendar_monthly_view")) {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        tabId = tabs[0].id as number;
        console.log(tabId);
      }
    );
    // Getting Session Key
    const sessKey: string = url.split("=")[1].split("&")[0];
    setTimeout(() => {
      // Fetching the current chrome tab
      chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs: chrome.tabs.Tab[]) => {
          // Sending a message to that tab
          chrome.tabs.sendMessage(
            tabId,
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
      urls: ["*://courses.nu.edu.eg/*"],
    });
  }, 200);

  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: chrome.tabs.Tab[]) => {
      console.log("starts");
      if (tabId == (tabs[0].id as number)) {
        console.log("matches");
        chrome.tabs.sendMessage(tabs[0].id as number, {
          timeline: res,
          type: "timeline",
        });
      } else {
        console.log("doesn't match");
        const onActivated = (activatedTab: any): void => {
          if (activatedTab.tabId == tabId) {
            chrome.tabs.onActivated.removeListener(onActivated);
            chrome.tabs.sendMessage(tabId as number, {
              timeline: res,
              type: "timeline",
            });
          }
        };
        chrome.tabs.onActivated.addListener(onActivated);
      }
    }
  );
};

chrome.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["*://courses.nu.edu.eg/*"],
});
