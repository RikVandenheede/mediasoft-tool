export const percetageFormatter = (currentVlue, totalArray) => {
  console.log("curretnvalue", currentVlue);
  console.log("totalArry", totalArray);

  let percentage = 0;
  let totalCount = 0;

  if (totalCount === 0) {
    totalArray?.result?.reports[0].data?.rows.forEach((e) => {
      totalCount += +e.metrics[0].values[0];
    });

    percentage = (+currentVlue / totalCount) * 100;
    return `${Math.round(percentage)}%`;
  }
};
