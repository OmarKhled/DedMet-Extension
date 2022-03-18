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
                fetch(
                  `https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,
                  {
                    headers: {
                      accept: "application/json, text/javascript, */*; q=0.01",
                      "content-type": "application/json",
                      Cookie: `MoodleSession=${res.cookie}`,
                      Connection: "keep-alive",
                    },
                    referrer: "https://courses.nu.edu.eg/my/index.php",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    body: '[{"index":0,"methodname":"core_course_get_recent_courses","args":{"userid":"4174","limit":10}}]',
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                  }
                )
                  .then((response) => response.json())
                  .then((response) => console.log(response))
                  .catch((error) => console.log("Error:", error));
              }
            );
            c += 1;
          }
        );
      });
    }
  },
  { urls: ["<all_urls>"] }
);
