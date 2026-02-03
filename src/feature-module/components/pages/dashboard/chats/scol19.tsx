import { useState } from "react";
import Chart from "react-apexcharts";

const SCol19Chart = () => {
  const [chartOptions] = useState<any>({
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: { show: false },
      sparkline: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 3,
        distributed: false,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 0,
      colors: ["#fff"],
    },
    colors: ["#00D1D1", "#1E90FF", "#3B28CC"],
    xaxis: {
      categories: [
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
      labels: {
        style: {
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickPlacement: "between",
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
        },
        formatter: (val: number) => `${val / 1000}K`,
        offsetX: -10,
      },
    },
    legend: {
      position: "bottom",
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: -10,
      },
    },
    tooltip: { enabled: true },
  });

  const [series] = useState([
    {
      name: "Completed",
      data: [
        800, 1000, 1200, 1300, 1500, 700, 900, 1000, 1600, 1500, 1200, 1100,
      ],
    },
    {
      name: "Ongoing",
      data: [700, 900, 1100, 1000, 1100, 600, 800, 950, 1300, 1200, 1000, 950],
    },
    {
      name: "Rescheduled",
      data: [600, 700, 1100, 1100, 1900, 500, 700, 850, 1500, 1600, 900, 850],
    },
  ]);

  return (
    <div id="s-col-19">
      <Chart options={chartOptions} series={series} type="bar" height={250} />
    </div>
  );
};

export default SCol19Chart;
