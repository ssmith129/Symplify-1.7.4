import { useState } from "react";
import Chart from "react-apexcharts";

const SCol20Chart = () => {
  const [chartOptions] = useState<any>({
    chart: {
      height: 250,
      type: "line",
      toolbar: { show: false },
      stacked: false,
    },
    stroke: {
      width: [0, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: ["solid", "gradient"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#434BAD",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0,
          },
        ],
      },
    },
    colors: ["#3B28CC", "#00B96B"],
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
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      labels: {
        style: {
          fontSize: "13px",
        },
        offsetX: -10,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function ({ series, dataPointIndex, w }: any) {
        const total = series[0][dataPointIndex];
        const completed = series[1][dataPointIndex];
        return `<div class="apex-tooltip">
          <strong>${w.globals.labels[dataPointIndex]}</strong><br/>
          <span style="color:#3B28CC">●</span> Total Appointments: ${total}<br/>
          <span style="color:#00B96B">●</span> Completed: ${completed}
        </div>`;
      },
    },
    legend: { show: false },
    grid: {
      borderColor: "#eee",
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: -10,
      },
    },
  });

  const [series] = useState([
    {
      name: "Total Appointments",
      type: "bar",
      data: [360, 280, 290, 270, 340, 220, 230, 180, 260, 200, 350, 400],
    },
    {
      name: "Completed",
      type: "area",
      data: [200, 195, 190, 185, 200, 160, 170, 165, 210, 215, 225, 230],
    },
  ]);

  return (
    <div id="s-col-20">
      <Chart options={chartOptions} series={series} type="line" height={250} />
    </div>
  );
};

export default SCol20Chart;
