// SCol10Chart.tsx
import React from "react";
import Chart from "react-apexcharts";

const SCol10Chart: React.FC = () => {
  const chartOptions = {
    chart: {
      type: "bar" as const,
      height: 340,
      stacked: false,
      toolbar: { show: false },
      animations: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Cardiology",
        "Urology",
        "Pediatrics",
        "Gynecology",
        "Psychiatrist",
        "General",
      ],
      max: 100,
      position: "top",
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          colors: "#6C7688",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          colors: "#0A1B39",
        },
      },
    },
    grid: {
      padding: {
        bottom: 0,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: ["#3538CD", "#0E9384"],
    legend: { show: false },
  };

  const chartSeries = [
    {
      name: "Series A",
      data: [58, 64, 72, 78, 70, 37],
    },
    {
      name: "Series B",
      data: [38, 80, 20, 20, 65, 20],
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={340}
    />
  );
};

export default SCol10Chart;
