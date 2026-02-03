import { useState } from "react";
import Chart from "react-apexcharts";

const SCol3Chart = () => {
  const [sCol3Chart] = useState<any>({
    chart: {
      width: 80,
      height: 54,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 0,
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
    colors: [
      "#06AED4",
      "#06AED4",
      "#06AED4",
      "#06AED4",
      "#06AED4",
      "#06AED4",
      "#06AED4",
    ],
    fill: {
      type: "solid",
    },
  });

  const [series] = useState([
    {
      name: "Data",
      data: [80, 35, 50, 45, 35, 60, 50], // Y values only
    },
  ]);

  return (
    <div id="s-col-3">
      <Chart
        options={sCol3Chart}
        series={series}
        type="bar"
        width={80}
        height={54}
      />
    </div>
  );
};

export default SCol3Chart;
