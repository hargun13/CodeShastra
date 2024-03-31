import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const data = {
  labels: ["Critical case", "Urgent case", "Errors", "Reviewed", "Success"],
  datasets: [
    {
      data: [30, 30, 5, 15, 20],
      backgroundColor: [
        "rgb(242,165,152)",
        "rgb(255,232,157)",
        "rgb(236,107,109)",
        "rgb(122,231,125)",
        "rgb(195,233,151)"
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const DoughnutChart = () => {
  return (
    <div style={{ width: "100px", height: "100px" }}>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: { display: true, position: "right" },
            tooltip: {
              enabled: true,
              displayColors: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  const dataset = data.datasets[tooltipItem.datasetIndex];
                  const total = dataset.data.reduce((acc, value) => acc + value, 0);
                  const value = dataset.data[tooltipItem.index];
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
