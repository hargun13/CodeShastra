import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profile Visits (in thousand)",
        data: [90, 130, 115, 150, 180, 121, 85, 101, 75, 0, 0, 0],
        backgroundColor: "#f55da9",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Account Views", 
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16, 
        },
      },
    },
  };

  return (
    <div className="w-full    ">
      <Bar data={data} height={250} width={300} options={options} className="mx-5"></Bar>
    </div>
  );
};

export default BarChart;
