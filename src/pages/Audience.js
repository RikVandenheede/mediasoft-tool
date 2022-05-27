import React, { useState, useEffect } from "react";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";
import { DivicesLoader } from "../helpers/loaders";
import { report } from "../helpers/report";

import { Phone, Tablet, Laptop } from "../helpers/svg";
import { useLoggedIn } from "../helpers/useLoggedIn";
import { renderButton, checkSignedIn } from "../helpers/utils";
import { percetageFormatter } from "../helpers/percentageFormatter";

export const Audience = () => {
  const tableHeaderCategories = [
    "Sessions",
    "New Sessions",
    "New Users",
    "Avg time on page",
    "Exit",
    "Bounce rate",
  ];

  // format data
  const data = [
    {
      name: "https://testing",
      values: [
        {
          Sessions: 34,
          NewSessions: 34,
          ExiNewUsers: 34,
          AvgTimeOnPage: 34,
          Exit: 34,
          BounceRate: 34,
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          Sessions: 34,
          NewSessions: 34,
          ExiNewUsers: 34,
          AvgTimeOnPage: 34,
          Exit: 34,
          BounceRate: 34,
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          Sessions: 34,
          NewSessions: 34,
          ExiNewUsers: 34,
          AvgTimeOnPage: 34,
          Exit: 34,
          BounceRate: 34,
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          Sessions: 34,
          NewSessions: 34,
          ExiNewUsers: 34,
          AvgTimeOnPage: 34,
          Exit: 34,
          BounceRate: 34,
        },
      ],
    },
    {
      page: "https://testing",
      categories: [
        {
          Sessions: 34,
          NewSessions: 34,
          ExiNewUsers: 34,
          AvgTimeOnPage: 34,
          Exit: 34,
          BounceRate: 34,
        },
      ],
    },
  ];

  const [devices, setDevices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const isSignedIn = useLoggedIn();

  useEffect(() => {
    setTimeout(() => {
      // // Devices ////
      // report({
      //   dimensions: "ga:deviceCategory",
      //   startDate: `7daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setDevices(
      //       res?.result?.reports[0].data?.rows.map((device) => {
      //         return {
      //           name: device.dimensions[0],
      //           value: device.metrics[0].values[0],
      //         };
      //       })
      //     )
      //   )
      //   .catch((err) => console.log(err));
      // // Country ////
      // report({
      //   dimensions: "ga:country",
      //   startDate: `7daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setCountries(
      //       res?.result?.reports[0].data?.rows.map((country) => {
      //         return {
      //           name: country.dimensions[0],
      //           values: [
      //             country.metrics[0].values[0],
      //             percetageFormatter(country.metrics[0].values[0], res),
      //           ],
      //         };
      //       })
      //     )
      //   )
      //   .catch((err) => console.log(err));
      // // Language ////
      // report({
      //   dimensions: "ga:language",
      //   startDate: `7daysAgo`,
      //   endDate: "today",
      // })
      //   .then((res) =>
      //     setLanguages(
      //       res?.result?.reports[0].data?.rows.map((language) => {
      //         return {
      //           name: language.dimensions[0],
      //           values: [
      //             language.metrics[0].values[0],
      //             percetageFormatter(language.metrics[0].values[0], res),
      //           ],
      //         };
      //       })
      //     )
      //   )
      //   .catch((err) => console.log(err));
    }, 1000);
  }, []);

  return (
    <>
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="audience" title="Audience">
          <section className="audience-top">
            <div className="audience-top__genre">
              <h2 className="audience-top__title">Gender</h2>
            </div>
            <div className="audience-top__age">
              <h2 className="audience-top__title">Age</h2>
              {/* <Table
                title="Age"
                categories={tableHeaderCategories}
                data={data}
              /> */}
            </div>
          </section>
          <section className="audience-bottom">
            <div className="audience-bottom__devices">
              <h2 className="audience-top__title">Devices</h2>
              {devices.length === 0 ? (
                <DivicesLoader />
              ) : (
                devices
                  .sort((a, b) => b.value - a.value)
                  .map((device, index) => {
                    return (
                      <div
                        key={index}
                        className={`audience-bottom__devices${
                          index === 0
                            ? "--highest"
                            : index === 1
                            ? "--middle"
                            : "--lowest"
                        }`}
                      >
                        {device?.name === "desktop" ? (
                          <Laptop />
                        ) : device?.name === "mobile" ? (
                          <Phone />
                        ) : (
                          <Tablet />
                        )}
                        <h3>{device.value}</h3>
                      </div>
                    );
                  })
              )}
            </div>
            <div className="audience-bottom__city">
              <h2 className="audience-top__title">Country</h2>
              <Table
                title="country"
                categories={["sessions", "% sessions"]}
                data={countries.sort((a, b) => b.values[0] - a.values[0])}
              />
            </div>
            <div className="audience-bottom__language">
              <h2 className="audience-top__title">Languages</h2>
              <Table
                title="Language"
                categories={["sessions", "% sessions"]}
                data={languages.sort((a, b) => b.values[0] - a.values[0])}
              />
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};
