import React, { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../components/molecules/Layout";
import { LineChart } from "../components/atoms/LineChart";

export const Social = () => {
  return (
    <Layout className="Social" title="Social">
      <div className="social__chart">
        <LineChart />
      </div>
    </Layout>
  );
};
