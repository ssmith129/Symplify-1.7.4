import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AppointmentReportChart = () => {
  const [sCol11] = useState<any>({
    chart: {
      width: 56,
      height: 40,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    series: [
      {
        name: "Data",
        data: [40, 50, 100, 100, 70],
      },
    ],
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#2E37A4",
            opacity: 1,
          },
        ],
      },
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
  const [sColl12] = useState<any>({
    chart: {
      width: 56,
      height: 40,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    series: [
      {
        name: "Data",
        data: [40, 50, 100, 100, 70],
      },
    ],
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#27AE60",
            opacity: 1,
          },
        ],
      },
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

  const [sCol13] = useState<any>({
    chart: {
      width: 56,
      height: 40,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    series: [
      {
        name: "Data",
        data: [40, 50, 100, 100, 70],
      },
    ],
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#E2B93B",
            opacity: 1,
          },
        ],
      },
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

  const [sCol14] = useState<any>({
    chart: {
      width: 56,
      height: 40,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    series: [
      {
        name: "Data",
        data: [40, 50, 100, 100, 70],
      },
    ],
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#EF1E1E",
            opacity: 1,
          },
        ],
      },
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

  return (
    <div>
      {/* row start */}
      <div className="row">
        {/* col start */}
        <div className="col-xl-3 col-md-6 d-flex">
          <div className="card shadow-sm flex-fill w-100 z-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="avatar avatar-sm bg-soft-primary border border-primary text-primary rounded-2 flex-shrink-0">
                  <i className="ti ti-calendar-time fs-14" />
                </span>
                <span className="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2">
                  +10%
                  <i className="ti ti-arrow-up-right ms-1" />
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 text-truncate">Total Appointments</p>
                  <h6 className="mb-0 fw-bold">850</h6>
                </div>
                <div id="s-col-11" className="chart-set">
                  <ReactApexChart
                    options={sCol11}
                    series={sCol11.series}
                    type="bar"
                    width={56}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-xl-3 col-md-6 d-flex">
          <div className="card shadow-sm flex-fill w-100 z-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="avatar avatar-sm bg-soft-success border border-success text-success rounded-2 flex-shrink-0">
                  <i className="ti ti-calendar-up fs-14" />
                </span>
                <span className="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2">
                  +11.5%
                  <i className="ti ti-arrow-up-right ms-1" />
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 text-truncate">Completed</p>
                  <h6 className="mb-0 fw-bold">720</h6>
                </div>
                <div id="s-col-12" className="chart-set">
                  <ReactApexChart
                    options={sColl12}
                    series={sColl12.series}
                    type="bar"
                    width={56}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-xl-3 col-md-6 d-flex">
          <div className="card shadow-sm flex-fill w-100 z-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="avatar avatar-sm bg-soft-warning border border-warning text-warning rounded-2 flex-shrink-0">
                  <i className="ti ti-calendar-down fs-14" />
                </span>
                <span className="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2">
                  +8.43%
                  <i className="ti ti-arrow-up-right ms-1" />
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 text-truncate">Cancelled</p>
                  <h6 className="mb-0 fw-bold">65</h6>
                </div>
                <div id="s-col-13" className="chart-set">
                  <ReactApexChart
                    options={sCol13}
                    series={sCol13.series}
                    type="bar"
                    width={56}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-xl-3 col-md-6 d-flex">
          <div className="card shadow-sm flex-fill w-100 z-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="avatar avatar-sm bg-soft-danger border border-danger text-danger rounded-2 flex-shrink-0">
                  <i className="ti ti-calendar-repeat fs-14" />
                </span>
                <span className="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2">
                  +6.58%
                  <i className="ti ti-arrow-up-right ms-1" />
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 text-truncate">Rescheduled</p>
                  <h6 className="mb-0 fw-bold">40</h6>
                </div>
                <div id="s-col-14" className="chart-set">
                  <ReactApexChart
                    options={sCol14}
                    series={sCol14.series}
                    type="bar"
                    width={56}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col end */}
      </div>
      {/* row end */}
    </div>
  );
};

export default AppointmentReportChart;
