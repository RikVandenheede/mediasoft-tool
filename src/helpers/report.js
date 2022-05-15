export const getDevices = () => {
  const displayResults = (response) => {
    console.log(response);
  };

  window.gapi.client
    .request({
      path: "/v4/reports:batchGet",
      root: "https://analyticsreporting.googleapis.com/",
      method: "POST",
      body: {
        reportRequests: [
          {
            viewId: "4206720", //enter your view ID here
            // dateRanges: [
            //   {
            //     startDate: "29daysAgo",
            //     endDate: "today",
            //   },
            // ],
            dimensions: [
              {
                name: "ga:deviceCategory",
              },
            ],
          },
        ],
      },
    })
    .then(displayResults, console.error.bind(console));
};
