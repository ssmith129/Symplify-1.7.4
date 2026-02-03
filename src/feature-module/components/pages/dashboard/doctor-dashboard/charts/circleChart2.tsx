import { useState } from "react";
import Chart from "react-apexcharts";

const CircleChart2 = () => {
  const [chartOptions] = useState<any>({
    chart: {
      type: "donut",
      height: 270,
      width: "100%",
    },
    labels: ["Completed", "Pending", "Cancelled"],
    colors: ["#27AE60", "#E2B93B", "#EF1E1E"], // green, yellow, red
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      colors: ["#fff"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: false, // Hide center label
          },
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  });

  const [series] = useState([80, 10, 10]);

  return (
    <div id="circle-chart-2">
      <Chart options={chartOptions} series={series} type="donut" height={270} />
    </div>
  );
};

export default CircleChart2;
