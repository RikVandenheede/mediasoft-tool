import React, { useState, useEffect } from "react";

import { DoughnutChart } from "../components/atoms/DoughnutChart";

import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import {
  DivicesLoader,
  GenderLoader,
  TableRowLoaderBig,
  TableRowLoaderSmall,
} from "../helpers/loaders";
import { report } from "../helpers/report";
import { Phone, Tablet, Laptop } from "../helpers/svg";
import { useLoggedIn } from "../helpers/useLoggedIn";
import {
  percetageFormatter,
  percetageFormatterAudience,
} from "../helpers/percentageFormatter";
import { timeFormatter } from "../helpers/timeFormatter";

export const Audience = () => {
  const [date, setDate] = useState("7");
  const [devices, setDevices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [gender, setGender] = useState([]);
  const [ages, setAges] = useState([]);
  const isSignedIn = useLoggedIn();

  useEffect(() => {
    setDevices([]);
    setCountries([]);
    setLanguages([]);
    setGender([]);
    setAges([]);

    setTimeout(() => {
      report({
        dimensions: ["ga:userAgeBracket"],
        metrics: [
          "ga:sessions",
          "ga:percentNewSessions",
          "ga:newUsers",
          "ga:avgTimeOnPage",
          "ga:exitRate",
          "ga:bounceRate",
        ],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          setAges(
            res?.result?.reports[0].data?.rows.map((age) => {
              return {
                name: age.dimensions[0],
                values: age.metrics[0].values.map((metric, i) => {
                  if (i === 0 || i === 2) return metric;
                  if (i === 3) return timeFormatter(Math.round(metric));
                  else return `${Math.round(metric)}%`;
                }),
              };
            })
          )
        )
        .catch((err) => console.log(err));
      report({
        dimensions: ["ga:userGender"],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          setGender(
            res?.result?.reports[0].data?.rows.map((gender) => {
              return {
                name: gender.dimensions[0],
                values: gender.metrics[0].values[0],
              };
            })
          )
        )
        .catch((err) => console.log(err));
      //// Devices ////
      report({
        dimensions: ["ga:deviceCategory"],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          setDevices(
            res?.result?.reports[0].data?.rows.map((device) => {
              return {
                name: device.dimensions[0],
                value: [percetageFormatter(device.metrics[0].values[0], res)],
              };
            })
          )
        )
        .catch((err) => console.log(err));
      // Country ////
      report({
        dimensions: ["ga:country"],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          setCountries(
            res?.result?.reports[0].data?.rows.map((country) => {
              return {
                name: country.dimensions[0],
                values: [
                  country.metrics[0].values[0],
                  percetageFormatter(country.metrics[0].values[0], res),
                ],
              };
            })
          )
        )
        .catch((err) => console.log(err));
      // Language ////
      report({
        dimensions: ["ga:language"],
        startDate: `${date}daysAgo`,
        endDate: "yesterday",
      })
        .then((res) =>
          setLanguages(
            res?.result?.reports[0].data?.rows.map((language) => {
              return {
                name: language.dimensions[0],
                values: [
                  language.metrics[0].values[0],
                  percetageFormatter(language.metrics[0].values[0], res),
                ],
              };
            })
          )
        )
        .catch((err) => console.log(err));
    }, 1000);
  }, [date]);

  const ageTableHeaderCategories = [
    "Sessions",
    "New Sessions",
    "New Users",
    "Avg time on page",
    "Exit",
    "Bounce rate",
  ];

  return (
    <>
      {!isSignedIn ? (
        <>
          <div id="signin-button"></div>
        </>
      ) : (
        <Layout className="audience" title="Audience" setDate={setDate}>
          <section className="audience-top">
            <div className="audience-top__gender">
              <h2 className="audience-top__title">Gender</h2>
              {gender.length === 0 ? (
                <GenderLoader />
              ) : (
                <DoughnutChart incoming={gender} />
              )}
            </div>
            <div className="audience-top__age">
              <h2 className="audience-top__title">Age</h2>
              {ages.length === 0 ? (
                <TableRowLoaderBig />
              ) : (
                <Table
                  className="age-table"
                  title="Age"
                  categories={ageTableHeaderCategories}
                  data={ages}
                />
              )}
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
            <div className="audience-bottom__country">
              <h2 className="audience-top__title">Country</h2>
              {countries.length === 0 ? (
                <TableRowLoaderSmall />
              ) : (
                <Table
                  className="country-table"
                  title="country"
                  categories={["sessions", "% sessions"]}
                  data={countries.sort((a, b) => b.values[0] - a.values[0])}
                />
              )}
            </div>
            <div className="audience-bottom__language">
              <h2 className="audience-top__title">Languages</h2>
              {languages.length === 0 ? (
                <TableRowLoaderSmall />
              ) : (
                <Table
                  className="languages-table"
                  title="Language"
                  categories={["sessions", "% sessions"]}
                  data={languages.sort((a, b) => b.values[0] - a.values[0])}
                />
              )}
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};
