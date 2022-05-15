import React, { useState, useEffect } from "react";

import { CardItem } from "../components/atoms/CardItem";
import { LineChart } from "../components/atoms/LineChart";
import { TableHeader } from "../components/atoms/TableHeader";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import { renderButton, checkSignedIn } from "../helpers/utils";
import { getDevices } from "../helpers/report";

export const Dashboard = () => {
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
      page: "https://testing",
      categories: [
        {
          pageviews: 69,
          timeOnPage: "00:00:59",
          exit: "38%",
          bounceRate: "50%",
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          pageviews: 70,
          timeOnPage: "00:00:59",
          exit: "38%",
          bounceRate: "50%",
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          pageviews: 71,
          timeOnPage: "00:00:59",
          exit: "38%",
          bounceRate: "50%",
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          pageviews: 72,
          timeOnPage: "00:00:59",
          exit: "38%",
          bounceRate: "50%",
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          pageviews: 72,
          timeOnPage: "00:00:59",
          exit: "38%",
          bounceRate: "50%",
        },
      ],
    },
  ];
  useEffect(() => {
    getDevices();
  });

  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    //(2)
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init); //(1)
    // console.log(getDevices());
  });

  return (
    <>
      {!isSignedIn ? <div id="signin-button"></div> : ""}
      {/* <Layout className="dashboard" title="Page Insights">
          <section className="dashboard-overview">
            <h2 className="dashboard-overview__title">Overview</h2>
            <section className="dashboard-overview-container">
              <div className="dashboard-overview-container__cards">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
              <div className="dashboard-overview-container__graph">
                <TableHeader
                  className="table-header"
                  title="Test"
                  selectOptions={["7 days", "1 month"]}
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
        </Layout> */}
    </>
  );
};
