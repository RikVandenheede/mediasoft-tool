// export const report = ({ dimensions, metrics, startDate, endDate }) => {
//   console.log(dimensions);

//   const metricOrDimension = (metric, dimension) => {};
//   return window.gapi.client.request({
//     path: "/v4/reports:batchGet",
//     root: "https://analyticsreporting.googleapis.com/",
//     method: "POST",
//     body: {
//       reportRequests: [
//         {
//           viewId: "4206720", //enter your view ID here
//           dateRanges: [
//             {
//               startDate,
//               endDate,
//             },
//           ],
//           metrics: metrics
//             ? [
//                 {
//                   expression: metrics,
//                 },
//               ]
//             : null,
//           dimensions: dimensions
//             ? [
//                 {
//                   name: dimensions,
//                 },
//               ]
//             : null,
//         },
//       ],
//     },
//   });
// };

export const report = ({ dimensions, metrics, startDate, endDate }) => {
  console.log(dimensions);

  const metricOrDimension = (metric, dimension) => {};
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
              expression: "ga:bounceRate",
            },
            {
              expression: "ga:bounceRate",
            },
          ],
          dimensions: dimensions
            ? [
                {
                  name: dimensions,
                },
              ]
            : null,
        },
      ],
    },
  });
};
