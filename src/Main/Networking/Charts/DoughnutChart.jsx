import React from "react";
import { Doughnut } from "react-chartjs-2";

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
      <h2>React Doughnut with Text Example</h2>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: { display: true, position: "right" }
          }
        }}
      />
    </div>
  );
};

export default DoughnutChart;
