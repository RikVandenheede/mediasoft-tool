import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
  ArcElement
);

export const DoughnutChart = ({ incoming }) => {
  console.log(incoming);

  const data = {
    labels: incoming.map((e) => e.name),
    datasets: [
      {
        label: "Gender",
        data: incoming.map((e) => e.values),
        backgroundColor: ["#fd6a84", "#6c5dd3"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: false,
        text: "Gender",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};
