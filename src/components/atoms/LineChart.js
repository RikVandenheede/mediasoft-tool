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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement
);

export const LineChart = () => {
  // let data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Orange"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [12, 19, 3, 5, 2, 3, 33],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // let options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   elements: {
  //     line: {
  //       tension: 0, // disables bezier curves
  //     },
  //   },
  // };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76, 54],
        backgroundColor: "#7e70d64d",
        borderColor: "#6c5dd3",
        cubicInterpolationMode: "monotone",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: false,
        text: "Badpages",
      },
    },
  };

  return (
    <div>
      <Line height="100%" options={options} data={data} />
    </div>
  );
};
