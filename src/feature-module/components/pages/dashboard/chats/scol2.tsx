import { useState } from "react";
import Chart from "react-apexcharts";

const SCol2Chart = () => {
  const [chartOptions] = useState<any>({
    chart: {
      width: 100,
      height: 54,
      type: "area",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 1,
      colors: ["#F36C3D"], // orange line
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#F36C3D",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0.8,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  });

  const [series] = useState([
    {
      name: "Data",
      data: [22, 35, 30, 40, 28, 45, 40],
    },
  ]);

  return (
    <div id="s-col-2">
      <Chart
        options={chartOptions}
        series={series}
        type="area"
        width={100}
        height={54}
      />
    </div>
  );
};

export default SCol2Chart;
