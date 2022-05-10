import "../components/molecules/Layout";
import { Layout } from "../components/molecules/Layout";
import { CardItem } from "../components/atoms/CardItem";

export const Dashboard = () => {
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
      </Layout>
    </>
  );
};
