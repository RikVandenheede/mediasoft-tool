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

export const LineChart = ({ tableData, active }) => {
  const correctData = tableData.map((item) => {
    for (let i = 0; i < item.values.length; i++) {
      if (item.values[i].name === active) return item.values[i].value;
    }
  });

  console.log(correctData);

  const data = {
    labels: tableData.map((item) => item.date),
    datasets: [
      {
        label: active,
        data: correctData,
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
      legend: {
        display: false,
      },
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
