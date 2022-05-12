import "../components/molecules/Layout";
import { Layout } from "../components/molecules/Layout";
import { CardItem } from "../components/atoms/CardItem";
import { Table } from "../components/molecules/Table";

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
  ];

  return (
    <>
      <Layout className="dashboard" title="Page Insights">
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
            <div className="dashboard-overview-container__graph"></div>
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
    </>
  );
};
