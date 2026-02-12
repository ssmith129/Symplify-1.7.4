import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import type { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { all_routes } from "../../../routes/all_routes";

const TwoStepVerificationBasic = () => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      secs < 10 ? "0" + secs : secs
    }`;
  };

  return (
    <>
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
                <ImageWithBasePath
                  src="assets/img/auth/twostep-verification-illustration-img.png"
                  alt="log-illustration-img-01"
                  className="img-fluid img1"
                />
              </div>
            </div>
            {/* end row*/}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3">
                <div className="col-md-8 mx-auto">
                  <form
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                      <div className=" mx-auto mb-4 text-center">
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <h5 className="mb-1 fs-20 fw-bold">
                              2 Step Verification
                            </h5>
                            <p className="mb-0">
                              Please enter the OTP received to confirm your
                              account ownership. A code has been send to
                              <span className="text-dark b-block">
                                
                                ******doe@example.com
                              </span>
                            </p>
                          </div>
                          <div className="text-center otp-input">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                              <Input.OTP length={4} {...sharedProps} />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div className="mb-3 d-flex align-items-center ">
                                <p className="text-gray-9 me-4 mb-0">
                                  Didn't receive code.
                                  <Link
                                    to="#"
                                    className="text-primary"
                                  >
                                    Resend Code
                                  </Link>
                                </p>
                                <span className="text-danger">{formatTime(seconds)}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-0">
                            <Link
                              to={all_routes.resetpasswordbasic}
                              className="btn bg-primary text-white w-100"
                            >
                              Submit
                            </Link>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>
                  </form>
                  <p className="text-dark text-center">
                    
                    Copyright © 2025 - Symplify
                  </p>
                </div>
                {/* end row*/}
              </div>
            </div>
          </div>
          {/* end row*/}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default TwoStepVerificationBasic;
