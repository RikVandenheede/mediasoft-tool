export const report = ({ dimensions, metrics, startDate, endDate }) => {
  return window.gapi.client.request({
    path: "/v4/reports:batchGet",
    root: "https://analyticsreporting.googleapis.com/",
    method: "POST",
    body: {
      reportRequests: [
        {
          viewId: "4206720", //enter your view ID here
          dateRanges: [
            {
              startDate,
              endDate,
            },
          ],
          metrics: [
            {
              expression: metrics,
            },
          ],
        },
      ],
    },
  });
};
