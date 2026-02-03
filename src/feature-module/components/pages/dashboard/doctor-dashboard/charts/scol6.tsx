import { useState } from "react";
import Chart from "react-apexcharts";

const SCol6Chart = () => {
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
        borderRadius: 0, // Square edges
        endingShape: "rounded",
      },
    },
    stroke: {
      show: false,
    },
    fill: {
      colors: ["#E04F16"], // Orange/red color
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
      data: [40, 60, 40, 60, 75, 40, 75],
    },
  ]);

  return (
    <div id="s-col-6">
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

export default SCol6Chart;
