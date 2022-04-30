export default (cookie: string, month: number): any => {
  const date: Date = new Date();
  return {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "content-type": "application/json",
      Cookie: `MoodleSession=${cookie}`,
      Connection: "keep-alive",
    },
    referrer: "https://courses.nu.edu.eg/my/index.php",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `[{"index":0,"methodname":"core_calendar_get_calendar_monthly_view","args":{"year":${date.getFullYear()},"month":${month},"courseid":1,"categoryid":0,"includenavigation":true,"mini":true}}]`,
    method: "POST",
    mode: "cors",
    credentials: "include",
  };
};
