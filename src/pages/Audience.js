import { Layout } from "../components/molecules/Layout";
import { Table } from "../components/molecules/Table";

import { Phone, Tablet, Laptop } from "../helpers/svg";

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
  return (
    <>
      <Layout className="audience" title="Audience">
        <section className="audience-top">
          <div className="audience-top__genre">
            <h2 className="audience-top__title">Gender</h2>
          </div>
          <div className="audience-top__age">
            <h2 className="audience-top__title">Age</h2>
            <Table title="Age" categories={tableHeaderCategories} data={data} />
          </div>
        </section>
        <section className="audience-bottom">
          <div className="audience-bottom__devices">
            <h2 className="audience-top__title">Devices</h2>
            <div className="audience-bottom__devices--lowest">
              <Tablet />
              <h3>2%</h3>
            </div>
            <div className="audience-bottom__devices--middle">
              <Phone />
              <h3>29%</h3>
            </div>
            <div className="audience-bottom__devices--highest">
              <Laptop />
              <h3>69%</h3>
            </div>
          </div>
          <div className="audience-bottom__city">
            <h2 className="audience-top__title">City/Country</h2>
          </div>
          <div className="audience-bottom__language">
            <h2 className="audience-top__title">Language</h2>
          </div>
        </section>
      </Layout>
    </>
  );
};
