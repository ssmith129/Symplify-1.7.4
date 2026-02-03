import { Link } from "react-router"
import ImageWithBasePath from "../../../../core/imageWithBasePath"
import type { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { all_routes } from "../../../routes/all_routes";


const TwoStepVerificationCover = () => {

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
          <div className="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
            <div className="authentication-card w-100">
              <div className="authen-overlay-item w-100">
                <div className="authen-head text-center">
                  <h1 className="text-white fs-32 fw-bold mb-2">
                    Seamless healthcare access <br /> with smart, modern clinic
                  </h1>
                  <p className="text-light fw-normal text-light">
                    
                    Experience efficient, secure, and user-friendly healthcare
                    management designed for modern clinics and growing
                    practices.
                  </p>
                </div>
                <div className="mt-4 mx-auto authen-overlay-img">
                  <ImageWithBasePath src="assets/img/auth/cover-imgs-1.png" alt="Img" />
                </div>
              </div>
            </div>
            <ImageWithBasePath
              src="assets/img/auth/cover-imgs-2.png"
              alt="cover-imgs-2"
              className="img-fluid cover-img"
            />
          </div>
        </div>
        {/* end row*/}
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100">
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
                  <div className="card border-1 p-lg-3 shadow-md rounded-3">
                    <div className="card-body">
                      <div className="text-center mb-3">
                        <h5 className="mb-1 fs-20 fw-bold">
                          2 Step Verification
                        </h5>
                        <p className="mb-0">
                          Please enter the OTP received to confirm your account
                          ownership. A code has been send to
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
                          to={all_routes.resetpasswordcover}
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
              <p className="fs-14 text-dark text-center mt-4">
                
                Copyright © 2025 - Preclinic
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

  )
}

export default TwoStepVerificationCover