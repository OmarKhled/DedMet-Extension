export default (cookie: string): any => {
  return {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "content-type": "application/json",
      Cookie: `MoodleSession=${cookie}`,
      Connection: "keep-alive",
    },
    referrer: "https://courses.nu.edu.eg/my/index.php",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '[{"index":0,"methodname":"core_calendar_get_calendar_monthly_view","args":{"year":2022,"month":4,"courseid":1,"categoryid":0,"includenavigation":true,"mini":true}}]',
    method: "POST",
    mode: "cors",
    credentials: "include",
  };
};
