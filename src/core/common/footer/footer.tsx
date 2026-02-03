import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <>
  {/* Footer Start */}
  <div className="footer text-center bg-white p-2 border-top">
    <p className="text-dark mb-0">
      2025 ©
      <Link to="#" className="link-primary">
        Symplify
      </Link>
      , All Rights Reserved
    </p>
  </div>
  {/* Footer End */}
</>

  );
};

export default Footer;
