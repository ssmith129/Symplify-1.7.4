// SCol9Chart.tsx
import React from "react";
import Chart from "react-apexcharts";

const SCol9Chart: React.FC = () => {
  const chartOptions = {
    chart: {
      width: "100%",
      height: 40,
      type: "area" as const,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth" as const,
      width: 2,
      colors: ["#007BFF"],
    },
    fill: {
      type: "gradient" as const,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#007BFF",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0.0,
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
      data: [10, 20, 15, 25, 18, 30, 28, 35, 32, 38],
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={series}
      type="area"
      height={40}
      width="100%"
    />
  );
};

export default SCol9Chart;
