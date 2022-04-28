import timelineFetchOptions from "./timelineFetchOptions";

interface requestDetails {
  url: string;
}
let tabId: number;
//
let sessKeyFound: boolean = false;
// Listener For Http Requests
const listener = ({ url }: requestDetails): void => {
  console.log("first");
  if (url.includes("sesskey") && !sessKeyFound) {
    sessKeyFound = true;
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
              return Promise.resolve(
                "Dummy response to keep the console quiet"
              );
            }
          );
        }
      );
    }, 200);
  }
};

const fetchTimelineData = async (sesskey: string, cookie: string) => {
  chrome.webRequest.onBeforeRequest.removeListener(listener);
  sessKeyFound = false;
  const date: Date = new Date();
  const months: number[] = [date.getMonth() + 1, date.getMonth() + 2];
  const timelineData: any[] = [];
  months.forEach(async (month) => {});

  for (let index = 0; index < months.length; index++) {
    const month = months[index];
    const json = await fetch(
      `https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,
      timelineFetchOptions(cookie, month)
    );
    const res = await json.json();
    timelineData.push(res[0]);
  }
  console.log(timelineData);

  // setTimeout(() => {
  //   chrome.webRequest.onBeforeRequest.addListener(listener, {
  //     urls: ["*://courses.nu.edu.eg/*"],
  //   });
  // }, 200);

  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: chrome.tabs.Tab[]) => {
      console.log("starts");
      if (tabId == (tabs[0].id as number)) {
        console.log("matches");
        chrome.tabs.sendMessage(tabs[0].id as number, {
          timeline: timelineData,
          type: "timeline",
        });
      } else {
        console.log("doesn't match");
        const onActivated = (activatedTab: any): void => {
          if (activatedTab.tabId == tabId) {
            chrome.tabs.onActivated.removeListener(onActivated);
            chrome.tabs.sendMessage(tabId as number, {
              timeline: timelineData,
              type: "timeline",
            });
          }
        };
        chrome.tabs.onActivated.addListener(onActivated);
      }
    }
  );
};

chrome.runtime.onMessage.addListener(({ msg }: { msg: string }, s, send) => {
  console.log(msg);
  chrome.webRequest.onBeforeRequest.removeListener(listener);
  if (msg == "/my/index.php") {
    chrome.webRequest.onBeforeRequest.addListener(listener, {
      urls: ["*://courses.nu.edu.eg/*"],
    });
  }
  send("hello");
});
