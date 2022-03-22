const listener = (details) => {
  if (details.url.includes("core_calendar_get_calendar_monthly_view")) {
    const sesskey = details.url.split("=")[1].split("&")[0];
    console.log(details.url);
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            url: sesskey,
            type: "sesskey",
          },
          (res) => {
            console.log(res);
            fetchTimeLine(sesskey, res.cookie);
          }
        );
      });
    }, 200);
  }
};

const fetchTimeLine = (sesskey, cookie) => {
  chrome.webRequest.onBeforeRequest.removeListener(listener);
  fetch(
    `https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,
    {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "content-type": "application/json",
        Cookie: `MoodleSession=${cookie}`,
        Connection: "keep-alive",
      },
      referrer: "https://courses.nu.edu.eg/my/index.php",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '[{"index":0,"methodname":"core_calendar_get_calendar_monthly_view","args":{"year":2022,"month":3,"courseid":1,"categoryid":0,"includenavigation":true,"mini":true}}]',
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  ).then((response) => {
    response
      .json()
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          chrome.webRequest.onBeforeRequest.addListener(listener, {
            urls: ["<all_urls>"],
          });
        }, 200);
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
              timeline: res,
              type: "res",
            });
          }
        );
      })
      .catch((error) => console.log("Error:", error));
  });
};

chrome.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["<all_urls>"],
});
