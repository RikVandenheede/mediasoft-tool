import React, { useState, useEffect } from "react";

import { CardItem } from "../components/atoms/CardItem";
import { LineChart } from "../components/atoms/LineChart";
import { TableHeader } from "../components/atoms/TableHeader";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import { renderButton, checkSignedIn } from "../helpers/utils";
import { report } from "../helpers/report";
import { timeFormatter } from "../helpers/timeFormatter";
import { useLoggedIn } from "../helpers/useLoggedIn";

export const Dashboard = () => {
  //LOGIN

  const tableHeaderTtile = "Pages";
  const tableHeaderCategories = [
    "Pageviews",
    "avg time on page",
    "Exit",
    "Bounce rate",
  ];

  // format data
  const data = [
    {
      name: "https://testing",
      values: [69, "00:00:59", "38%", "50%"],
    },
  ];

  const [date, setDate] = useState("7");
  const isSignedIn = useLoggedIn();

  const [users, setUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [time, setTime] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [bouncerate, setBouncerate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      report({
        dimensions: "ga:pagePath",
        startDate: `${date}daysAgo`,
        endDate: "today",
      })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));

      // // USERS ////
      // report({
      //   metrics: "ga:users",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setUsers(
      //       res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //     )
      //   )
      //   .catch((err) => console.log(err));

      // //// New Users ////
      // report({
      //   metrics: "ga:newusers",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setNewUsers(
      //       res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //     )
      //   )
      //   .catch((err) => console.log(err));

      // //// Pageviews ////
      // report({
      //   metrics: "ga:pageviews",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setPageViews(
      //       res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //     )
      //   )
      //   .catch((err) => console.log(err));
      // //// Averag e session duration ////
      // report({
      //   metrics: "ga:avgSessionDuration",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setTime(
      //       timeFormatter(
      //         Math.round(
      //           res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //         )
      //       )
      //     )
      //   )
      //   .catch((err) => console.log(err));
      // //// Sessions ////
      // report({
      //   metrics: "ga:sessions",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setSessions(
      //       res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //     )
      //   )
      //   .catch((err) => console.log(err));
      // //// Bounce rate ////
      // report({
      //   metrics: "ga:bounceRate",
      //   startDate: `${date}daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setBouncerate(
      //       `${Math.round(
      //         res?.result?.reports[0]?.data?.rows[0]?.metrics[0]?.values[0]
      //       )}%`
      //     )
      //   )
      //   .catch((err) => console.log(err));
    }, 1000);
  }, [date, isSignedIn]);

  const [active, setActive] = useState("Users");
  return (
    <>
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="dashboard" title="Page Insights">
          <section className="dashboard-overview">
            <h2 className="dashboard-overview__title">Overview</h2>
            <section className="dashboard-overview-container">
              <div className="dashboard-overview-container__cards">
                <CardItem
                  name="Users"
                  value={users}
                  active={active}
                  setActive={setActive}
                />
                <CardItem
                  name="New Users"
                  value={newUsers}
                  active={active}
                  setActive={setActive}
                />
                <CardItem
                  name="Sessions"
                  value={sessions}
                  active={active}
                  setActive={setActive}
                />
                <CardItem
                  name="Avg Session duration"
                  value={time}
                  active={active}
                  setActive={setActive}
                />
                <CardItem
                  name="Pageviews"
                  value={pageViews}
                  active={active}
                  setActive={setActive}
                />
                <CardItem
                  name="Bounce rate"
                  value={bouncerate}
                  active={active}
                  setActive={setActive}
                />
              </div>
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
                data={data}
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
