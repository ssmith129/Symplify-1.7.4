import { useState } from "react";
import Chart from "react-apexcharts";

const SCol5Chart = () => {
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
        borderRadius: 2,
        endingShape: "rounded",
      },
    },
    stroke: {
      show: false,
    },
    fill: {
      colors: ["#2e3192"], // Blue color
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
      data: [40, 60, 55, 80, 35, 70, 60],
    },
  ]);

  return (
    <div id="s-col-5">
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

export default SCol5Chart;
