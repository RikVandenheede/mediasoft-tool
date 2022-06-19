import React, { useState, useEffect } from "react";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import { useLoggedIn } from "../helpers/useLoggedIn";
import { timeFormatter } from "../helpers/timeFormatter";
import { report } from "../helpers/report";
import { TableRowLoaderAcquisition } from "../helpers/loaders";

export const Acquisition = () => {
  const isSignedIn = useLoggedIn();
  const [date, setDate] = useState("7");
  const [organic, setOrganic] = useState([]);
  const [direct, setDirect] = useState([]);
  const [social, setSocial] = useState([]);
  const [other, setother] = useState([]);

  useEffect(() => {
    setOrganic([]);
    setSocial([]);
    setDirect([]);
    setother([]);

    setTimeout(() => {
      report({
        dimensions: ["ga:acquisitionSource"],
        metrics: [
          "ga:sessions",
          "ga:avgSessionDuration",
          "ga:pageViews",
          "ga:pageviewsPerSession",
          "ga:bounceRate",
        ],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          acquisitionFormatter(
            res?.result?.reports[0]?.data?.rows,
            res?.result?.reports[0]?.data?.totals[0]?.values[0]
          )
        )
        .catch((e) => console.log(e));
    }, 1000);
  }, [date, isSignedIn]);

  const tableHeaderCategories = [
    "total %",
    "sessions",
    "Avg. session duration",
    "Pageviews",
    "Pageviews per session",
    "Bounce rate",
  ];

  const acquisitionFormatter = (response, resTotal) => {
    const socials = [];
    const organics = [];
    const directs = [];
    const others = [];

    const tableFormatter = (list) => {
      return {
        width: ((list?.metrics[0]?.values[0] / resTotal) * 100).toFixed(1),
        name: list.dimensions[0],
        values: list?.metrics[0]?.values.map((item, i) => {
          if (i === 0 || i === 2) return Math.round(item);
          else if (i === 1) return timeFormatter(Math.round(item));
          else if (i === 3) return parseFloat(item).toFixed(1);
          else return `${Math.round(item)}%`;
        }),
      };
    };

    response.forEach((item) => {
      if (
        item.dimensions[0] === "Facebook" ||
        item.dimensions[0] === "Instagram" ||
        item.dimensions[0] === "LinkedIn" ||
        item.dimensions[0] === "Twitter"
      )
        socials.push(tableFormatter(item));
      else if (
        item.dimensions[0] === "google" ||
        item.dimensions[0] === "bing" ||
        item.dimensions[0] === "duckduckgo"
      )
        organics.push(tableFormatter(item));
      else if (item.dimensions[0] === "(direct)")
        directs.push(tableFormatter(item));
      else if (
        item.dimensions[0] !== "Google" &&
        item.dimensions[0] !== "facebook.com"
      )
        others.push(tableFormatter(item));
    });

    setOrganic(organics);
    setSocial(socials);
    setDirect(directs);
    setother(others);
  };

  return (
    <>
      {/* {console.log(social)}
      {console.log(organic)}
      {console.log(direct)}
      {console.log(other)} */}
      {/* {console.log(tableData)} */}
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="acquisition" title="Acquisition" setDate={setDate}>
          {console.log(date)}
          {console.log(social.length)}
          <section className="acquisition__socials">
            <h2>Socials</h2>
            {social.length === 0 ? (
              <TableRowLoaderAcquisition />
            ) : (
              <Table
                className="acquisition-table"
                categories={tableHeaderCategories}
                data={social.sort((a, b) => b.values[0] - a.values[0])}
              />
            )}
          </section>
          <section className="acquisition__organic">
            <h2>Organic</h2>
            {organic.length === 0 ? (
              <TableRowLoaderAcquisition />
            ) : (
              <Table
                className="acquisition-table"
                categories={tableHeaderCategories}
                data={organic.sort((a, b) => b.values[0] - a.values[0])}
              />
            )}
          </section>
          <section className="acquisition__direct">
            <h2>Direct</h2>
            {direct.length === 0 ? (
              <TableRowLoaderAcquisition />
            ) : (
              <Table
                className="acquisition-table"
                categories={tableHeaderCategories}
                data={direct.sort((a, b) => b.values[0] - a.values[0])}
              />
            )}
          </section>
          <section className="acquisition__others">
            <h2>Others</h2>
            {other.length === 0 ? (
              <TableRowLoaderAcquisition />
            ) : (
              <Table
                className="acquisition-table"
                categories={tableHeaderCategories}
                data={other.sort((a, b) => b.values[0] - a.values[0])}
              />
            )}
          </section>
        </Layout>
      )}
    </>
  );
};
