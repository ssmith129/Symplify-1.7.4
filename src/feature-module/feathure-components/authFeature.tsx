
import { Outlet } from "react-router-dom";

const AuthFeature = () => {

  return (
   <div className="main-wrapper auth-bg auth-bg-custom position-relative overflow-hidden">
     <Outlet />
   </div>
  );
};

export default AuthFeature;
