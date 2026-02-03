import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (time: number) => {
    // Add leading zero for single-digit numbers
    return time < 10 ? `0${time}` : time;
  };

  return (
    <>
      {/* Start Content */}
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 coming-soon-cover">
          <ImageWithBasePath
            src="assets/img/bg/coming-soon-bg.png"
            alt=""
            className="img-fluid position-absolute bottom-0"
          />
          {/* start row */}
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div className="col-lg-6 mx-auto">
              <div className="card bg-transparent border-0">
                <div className="comming-soon-pg d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3 p-3">
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pb-3 mb-3">
                    <ImageWithBasePath
                      src="assets/img/bg/coming-soon.svg"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <ul className="d-inline-flex list-unstyled align-items-center justify-content-center mb-3">
                    <li className="me-sm-3 me-2">
                      <div className="timer-cover">
                        <div className="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3">
                          <p className="mb-1">Days</p>
                          <h3 className="days fw-bold mb-0">54</h3>
                        </div>
                      </div>
                    </li>
                    <li className="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">
                      :
                    </li>
                    <li className="me-sm-3 me-2">
                      <div className="timer-cover">
                        <div className="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3">
                          <p className="mb-1">Hours</p>
                          <h3 className="hours fw-bold mb-0">2</h3>
                        </div>
                      </div>
                    </li>
                    <li className="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">
                      :
                    </li>
                    <li className="me-sm-3 me-2">
                      <div className="timer-cover">
                        <div className="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3">
                          <p className="mb-1">Minutes</p>
                          <h3 className="minutes fw-bold mb-0">54</h3>
                        </div>
                      </div>
                    </li>
                    <li className="text-dark fw-normal fs-18 me-sm-3 mb-2 me-2">
                      :
                    </li>
                    <li>
                      <div className="timer-cover">
                        <div className="d-flex align-items-center justify-content-center flex-column border rounded bg-white p-3">
                          <p className="mb-1">Seconds</p>
                          <h2 className="seconds fw-bold mb-0">
                            {formatTime(seconds)}
                          </h2>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="w-75">
                    <div className="subscribe-form w-100">
                      <div className="mb-3">
                        <p className="d-flex text-center justify-content-center">
                          Explore the amazing new features we have created just
                          for you. To receive the most recent updates sent to
                          your email, subscribe to our newsletter.
                        </p>
                      </div>
                      <div className="d-flex align-items-center ps-0 mb-3">
                        <input
                          type="email"
                          className="form-control me-2"
                          placeholder="Enter Your Mail Address"
                        />
                        <Link to="#" className="btn btn-primary">
                          Subscribe
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-items-center pb-3 media-btn">
                      <Link
                        to="#"
                        className="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-brand-facebook fs-16" />
                      </Link>
                      <Link
                        to="#"
                        className="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-brand-twitter fs-16" />
                      </Link>
                      <Link
                        to="#"
                        className="btn rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-brand-linkedin fs-16" />
                      </Link>
                      <Link
                        to="#"
                        className="btn rounded-circle btn-icon btn-sm d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-brand-instagram fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default ComingSoon;
