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

export const report = ({ dimensions, metrics, startDate, endDate, order }) => {
  return window.gapi.client.request({
    path: "/v4/reports:batchGet",
    root: "https://analyticsreporting.googleapis.com/",
    method: "POST",
    body: {
      reportRequests: [
        {
          viewId: process.env.REACT_APP_CLIENT_ID, //enter your view ID here
          dateRanges: [
            {
              startDate,
              endDate,
            },
          ],
          metrics: metrics
            ? [
                metrics.map((metric) => {
                  return {
                    expression: metric,
                  };
                }),
              ]
            : null,
          dimensions: dimensions
            ? [
                dimensions.map((dimension) => {
                  return {
                    name: dimension,
                  };
                }),
              ]
            : null,
          orderBys: order ? [order] : null,
        },
      ],
    },
  });
};
