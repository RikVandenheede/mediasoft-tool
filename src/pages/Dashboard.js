import React, { useState, useEffect } from "react";

import { CardItem } from "../components/atoms/CardItem";
import { LineChart } from "../components/atoms/LineChart";
import { TableHeader } from "../components/atoms/TableHeader";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import { report } from "../helpers/report";
import { timeFormatter } from "../helpers/timeFormatter";
import { useLoggedIn } from "../helpers/useLoggedIn";
import {
  OverviewGridLoader,
  GraphLoader,
  TableRowLoaderPages,
  VisitsLoader,
} from "../helpers/loaders";

export const Dashboard = () => {
  const [date, setDate] = useState("7");
  const isSignedIn = useLoggedIn();
  const [pages, setPages] = useState([]);
  const [gridMetrics, setGridMetrics] = useState([]);
  const [active, setActive] = useState("Users");
  const [current, setCurrent] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [visitsToday, setVisitsToday] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // PAGES; ////
      report({
        dimensions: ["ga:pagePath"],
        metrics: [
          "ga:pageViews",
          "ga:avgTimeOnPage",
          "ga:exitRate",
          "ga:bounceRate",
        ],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
        order: { fieldName: "ga:pageViews", sortOrder: "DESCENDING" },
      })
        .then((res) =>
          setPages(
            res?.result?.reports[0]?.data?.rows.map((page) => {
              return {
                name: page.dimensions[0],
                values: page.metrics[0].values.map((metric, i) => {
                  if (i === 0) return metric;
                  else if (i === 1) return timeFormatter(Math.round(metric));
                  else return `${Math.round(metric)}%`;
                }),
              };
            })
          )
        )
        .catch((e) => console.log(e));

      report({
        dimensions: ["ga:date"],
        metrics: [
          "ga:users",
          "ga:newUsers",
          "ga:avgSessionDuration",
          "ga:sessions",
          "ga:pageViews",
          "ga:bounceRate",
        ],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          gridMetricsFormatter(
            res?.result?.reports[0]?.data?.totals[0]?.values,
            res?.result?.reports[0]?.data?.rows
          )
        )
        .catch((e) => console.log(e));

      report({
        metrics: [
          "ga:users",
          "ga:newUsers",
          "ga:avgSessionDuration",
          "ga:sessions",
          "ga:pageViews",
          "ga:bounceRate",
        ],
        startDate: `${date * 2}daysAgo`,
        endDate: `${+date + 1}daysAgo`,
      })
        .then((res) =>
          setPrevious(
            res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values.map(
              (e) => {
                return Math.round(e);
              }
            )
          )
        )
        .catch((e) => console.log(e));
    }, 1000);
  }, [date, isSignedIn]);

  useEffect(() => {
    setTimeout(() => {
      report({
        dimensions: ["ga:day"],
        metrics: ["ga:1dayUsers"],
        startDate: `today`,
        endDate: "today",
      })
        .then((res) =>
          setVisitsToday(res?.result?.reports[0]?.data?.totals[0]?.values[0])
        )
        .catch((e) => console.log(e));
    }, 1000);
  });

  const tableHeaderCategories = [
    "Pageviews",
    "Avg time on page",
    "Exit",
    "Bounce rate",
  ];

  // This is data for the Table and the Gridoverview
  const gridMetricsFormatter = (metricsTotal, metricsByDay) => {
    console.log(metricsByDay);

    const titles = [
      "Users",
      "New Users",
      "Avg Session Duration",
      "Sessions",
      "Pageviews",
      "Bounce Rate",
    ];

    setCurrent(
      metricsTotal.map((e) => {
        return Math.round(e);
      })
    );

    setTableData(
      metricsByDay.map((day) => {
        return {
          date: day.dimensions[0],
          values: day.metrics[0].values.map((item, i) => {
            return {
              name: titles[i],
              value: Math.round(item),
            };
          }),
        };
      })
    );

    setGridMetrics(
      metricsTotal.map((metric, i) => {
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

  const correctPercentage = (curr, prev) => {
    let myNumber = ((curr - prev) / curr) * 100;
    return myNumber.toFixed(1);
  };

  return (
    <>
      {/* {console.log(tableData)} */}
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="dashboard" title="Page Insights" setDate={setDate}>
          <section className="dashboard-overview">
            <h2 className="dashboard-overview__title">Overview</h2>
            <section className="dashboard-overview-container">
              {gridMetrics.length === 0 ? (
                <OverviewGridLoader />
              ) : (
                <div className="dashboard-overview-container__cards">
                  {gridMetrics.map((item, i) => {
                    return (
                      <CardItem
                        name={item.name}
                        value={item.value}
                        active={active}
                        setActive={setActive}
                        percentage={correctPercentage(current[i], previous[i])}
                      />
                    );
                  })}
                </div>
              )}
              {gridMetrics.length === 0 ? (
                <GraphLoader />
              ) : (
                <div className="dashboard-overview-container__graph">
                  <TableHeader className="table-header" title={active} />
                  <LineChart tableData={tableData} active={active} />
                </div>
              )}
            </section>
          </section>
          <section className="dashboard-bottom">
            <div>
              <h2 className="dashboard-bottom__title">
                What pages do our users visit?
              </h2>
              {pages.length === 0 ? (
                <TableRowLoaderPages />
              ) : (
                <Table
                  className="pages-table"
                  title="Pages"
                  categories={tableHeaderCategories}
                  data={pages}
                  tooltip
                />
              )}
            </div>
            <div>
              <h2 className="dashboard-bottom__title">Visits today</h2>
              {console.log(visitsToday)}
              {visitsToday.length === 0 ? (
                <VisitsLoader />
              ) : (
                <div className="dashboard-bottom__live-container">
                  <div className="dashboard-bottom__live">
                    <span>{visitsToday}</span>
                  </div>

                  {/* <div></div> */}
                </div>
              )}
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};
