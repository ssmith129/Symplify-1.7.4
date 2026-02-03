import { useState } from "react";
import Chart from "react-apexcharts";

const SCol4Chart = () => {
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
      width: 2,
      colors: ["#008073"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#008073",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0.1,
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
  });

  const [series] = useState([
    {
      name: "Data",
      data: [20, 12, 9, 14, 18, 25, 30, 28, 35, 40],
    },
  ]);

  return (
    <div id="s-col-4">
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

export default SCol4Chart;
