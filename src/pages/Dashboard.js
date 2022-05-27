import React, { useState, useEffect } from "react";

import { CardItem } from "../components/atoms/CardItem";
import { LineChart } from "../components/atoms/LineChart";
import { TableHeader } from "../components/atoms/TableHeader";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";
import { OverviewGridLoader } from "../helpers/loaders";

import { report } from "../helpers/report";
import { timeFormatter } from "../helpers/timeFormatter";
import { useLoggedIn } from "../helpers/useLoggedIn";

export const Dashboard = () => {
  const [date, setDate] = useState("7");
  const isSignedIn = useLoggedIn();
  const [pages, setPages] = useState([]);
  const [gridMetrics, setGridMetrics] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      //// PAGES; ////
      // report({
      //   dimensions: ["ga:pagePath"],
      //   metrics: [
      //     "ga:pageViews",
      //     "ga:avgTimeOnPage",
      //     "ga:exitRate",
      //     "ga:bounceRate",
      //   ],
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      //   order: { fieldName: "ga:pageViews", sortOrder: "DESCENDING" },
      // })
      //   .then((res) =>
      //     setPages(
      //       res?.result?.reports[0]?.data?.rows.map((page) => {
      //         return {
      //           name: page.dimensions[0],
      //           values: page.metrics[0].values.map((metric, i) => {
      //             if (i === 0) return metric;
      //             else if (i === 1) return timeFormatter(Math.round(metric));
      //             else return `${Math.round(metric)}%`;
      //           }),
      //         };
      //       })
      //     )
      //   )
      //   .catch((e) => console.log(e));
      report({
        metrics: [
          "ga:users",
          "ga:newUsers",
          "ga:avgSessionDuration",
          "ga:sessions",
          "ga:pageViews",
          "ga:bounceRate",
        ],
        startDate: `${date}daysAgo`,
        endDate: "today",
      })
        .then((res) =>
          gridMetricsFormatter(
            res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values
          )
        )
        .catch((e) => console.log(e));
    }, 1000);
  }, [date, isSignedIn]);

  const tableHeaderCategories = [
    "Pageviews",
    "avg time on page",
    "Exit",
    "Bounce rate",
  ];

  const gridMetricsFormatter = (metrics) => {
    const titles = [
      "Users",
      "New Users",
      "Avg Session Duration",
      "Sessions",
      "Pageviews",
      "Bounce Rate",
    ];

    setGridMetrics(
      metrics.map((metric, i) => {
        return {
          name: titles[i],
          value:
            i === 2 // Time
              ? timeFormatter(Math.round(metric))
              : i === 5 // Percent
              ? `${Math.round(metric)}%`
              : metric,
        };
      })
    );
  };

  const [active, setActive] = useState("Users");
  return (
    <>
      {console.log(gridMetrics)}
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="dashboard" title="Page Insights">
          <section className="dashboard-overview">
            <h2 className="dashboard-overview__title">Overview</h2>
            <section className="dashboard-overview-container">
              {gridMetrics.length === 0 ? (
                <OverviewGridLoader />
              ) : (
                <div className="dashboard-overview-container__cards">
                  {gridMetrics.map((item) => {
                    return (
                      <CardItem
                        name={item.name}
                        value={item.value}
                        active={active}
                        setActive={setActive}
                      />
                    );
                  })}
                </div>
              )}
              <div className="dashboard-overview-container__graph">
                <TableHeader
                  className="table-header"
                  title={active}
                  selectOptions={["7 days", "30 days", "90 days", "180 days"]}
                  setDate={setDate}
                />
                <LineChart />
              </div>
            </section>
          </section>
          <section className="dashboard-bottom">
            <div>
              <h2 className="dashboard-bottom__title">
                What pages do our users visit?
              </h2>
              <Table
                title="Pages"
                categories={tableHeaderCategories}
                data={pages}
              />
            </div>
            <div>
              <h2 className="dashboard-bottom__title">Live Users</h2>
              <div className="dashboard-bottom__live-container">
                <div className="dashboard-bottom__live">
                  <span>14</span>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};
