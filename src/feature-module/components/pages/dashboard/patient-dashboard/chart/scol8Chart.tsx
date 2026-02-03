// SCol8Chart.tsx
import React from "react";
import Chart from "react-apexcharts";

const SCol8Chart: React.FC = () => {
  const chartOptions = {
    chart: {
      width: "100%",
      height: 35,
      type: "area" as const,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth" as const,
      width: 2,
      colors: ["#3538CD"],
    },
    fill: {
      type: "gradient" as const,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#3538CD",
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
    dataLabels: { enabled: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
  };

  const series = [
    {
      name: "Data",
      data: [22, 35, 30, 40, 28, 45, 40],
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={series}
      type="area"
      height={35}
      width="100%"
    />
  );
};

export default SCol8Chart;
