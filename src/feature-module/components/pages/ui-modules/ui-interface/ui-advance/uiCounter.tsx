import CountUp from "react-countup";
import { Link } from "react-router";
const UiCounter = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div className="flex-grow-1">
            <h4 className="fw-bold mb-0">Counter</h4>
          </div>
          <div className="text-end">
            <ol className="breadcrumb m-0 py-0">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Advanced UI</Link>
              </li>
              <li className="breadcrumb-item active">Counter</li>
            </ol>
          </div>
        </div>
        {/* End Page Header */}

        <div className="row">
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Clients</h5>
                <h6 className="counter">
                  <CountUp end={3000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Total Sales</h5>
                <h6 className="counter">
                  <CountUp end={10000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Total Projects</h5>
                <h6 className="counter">
                  <CountUp end={15000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Down</h5>
              </div>
              <div className="card-body">
                <h6>Time Count from 3</h6>
                {/* <span id="timer-countdown" /> */}
                <CountUp
                  start={59}
                  end={0}
                  duration={59}
                  prefix="00 Day 00 : 02 :"
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Up</h5>
              </div>
              <div className="card-body">
                <h6>Time Counting From 0</h6>
                {/* <span id="timer-countup" /> */}
                <CountUp end={60} duration={60} prefix="00 Day 00 : 00 :" />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Inbetween</h5>
              </div>
              <div className="card-body">
                <h6>Time counting from 30 to 20</h6>
                {/* <span id="timer-countinbetween" /> */}
                <CountUp end={30} duration={10} prefix="00 Day 00 : 00 :" />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Callback</h5>
              </div>
              <div className="card-body">
                <h6>Count from 10 to 0 and calls timer end callback</h6>
                {/* <span id="timer-countercallback"> */}
                <CountUp
                  start={10}
                  end={0}
                  duration={10}
                  prefix="00 Day 00 : 00 :"
                  onEnd={() => {
                    return "calls timer end";
                  }}
                  className="linestripe"
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Output</h5>
              </div>
              <div className="card-body">
                <h6>Changed output pattern</h6>
                {/* <span id="timer-outputpattern" /> */}
                <CountUp
                  start={60}
                  end={0}
                  duration={60}
                  prefix="02 Days 23 Hour 59 Min "
                  suffix=" Sec.."
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
        </div>
      </div>
    </div>
  );
};

export default UiCounter;
