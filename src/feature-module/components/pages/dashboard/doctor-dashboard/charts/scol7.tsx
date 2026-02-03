import { useState } from "react";
import Chart from "react-apexcharts";

const SCol7Chart = () => {
  const [chartOptions] = useState<any>({
    chart: {
      type: "bar",
      height: 60,
      width: 100,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2, // Rounded top
        endingShape: "rounded",
      },
    },
    stroke: {
      show: false,
    },
    fill: {
      colors: ["#0E9384"], // Teal color
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
  });

  const [series] = useState([
    {
      name: "Data",
      data: [20, 35, 30, 50, 60, 35, 25, 45],
    },
  ]);

  return (
    <div id="s-col-7">
      <Chart
        options={chartOptions}
        series={series}
        type="bar"
        width={100}
        height={60}
      />
    </div>
  );
};

export default SCol7Chart;
