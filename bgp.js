let c = 1;
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    if (details.url.includes("core_calendar_get_calendar_monthly_view")) {
      console.log(details.url);
      const sesskey = details.url.split("=")[1].split("&")[0];
      setTimeout(() => {
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(
              tabs[0].id,
              {
                url: sesskey,
              },
              (res) => {
                console.log(res);
              }
            );
            c += 1;
          }
        );
      }, 200);
    }
  },
  { urls: ["<all_urls>"] }
);
