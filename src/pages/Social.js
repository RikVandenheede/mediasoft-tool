import React, { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../components/molecules/Layout";
import { LineChart } from "../components/atoms/LineChart";

export const Social = () => {
  const timeFormatter = (time) => {
    let dateString = "";
    let timeDub = time;

    const repeater = (seconds) => {
      let counter = 0;

      while (timeDub >= seconds) {
        timeDub -= seconds;
        counter++;
      }

      if (seconds >= 3600) dateString += `${counter}h `;
      else if (seconds >= 60) dateString += `${counter}m `;
    };

    if (time >= 3600) repeater(3600);
    if (time >= 60) repeater(60);

    return (dateString += `${time % 60}s`);
  };
  console.log(timeFormatter(14));

  return (
    <Layout className="Social" title="Social">
      <div className="social__chart">
        <LineChart />
      </div>
    </Layout>
  );
};
