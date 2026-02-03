import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../imageWithBasePath";
import { all_routes } from "../../../feature-module/routes/all_routes";
import  { useState, useEffect } from "react";
import { updateTheme } from "../../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { setExpandMenu, setMobileSidebar } from "../../redux/sidebarSlice";

const SidebarTwo = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // State to manage open submenus
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Helper to check if any submenu child is active
  const isAnyActive = (paths: string[]) => paths.some(isActive);

   const mobileSidebar = useSelector(
      (state: any) => state.sidebarSlice.mobileSidebar
    );
     const toggleMobileSidebar = () => {
        dispatch(setMobileSidebar(!mobileSidebar));
      };

  // Open submenu if a child route is active
  useEffect(() => {
    setOpenSubmenus((prev) => ({
      ...prev,
      appointments: isAnyActive([
        all_routes.doctorsappointments,
        all_routes.onlineconsultations,
      ]),
      settings: isAnyActive([
        all_routes.doctorsprofilesettings,
        all_routes.doctorspasswordsettings,
        all_routes.doctorsnotificationsettings,
      ]),
    }));
    // eslint-disable-next-line
  }, [location.pathname]);

  // Toggle submenu open/close
  const handleToggle = (submenu: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };


    const dispatch = useDispatch();

   const handleMiniSidebar = () => {
      const rootElement = document.documentElement;
      const isMini = rootElement.getAttribute("data-layout") === "mini";
      const updatedLayout = isMini ? "default" : "mini";
      dispatch(
        updateTheme({
          "data-layout": updatedLayout,
        })
      );
      if (isMini) {
        rootElement.classList.remove("mini-sidebar");
      } else {
        rootElement.classList.add("mini-sidebar");
      }
    };
    const onMouseEnter = () => {
      dispatch(setExpandMenu(true));
    };
    const onMouseLeave = () => {
      dispatch(setExpandMenu(false));
    };

  return (
    <>
      {/* Sidenav Menu Start */}
      <div className="sidebar doctor-sidebar" id="sidebar"
       onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {/* Start Logo */}
        <div className="sidebar-logo">
          <div>
            {/* Logo Normal */}
            <Link to={all_routes.dashboard} className="logo logo-normal">
              <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
            </Link>
            {/* Logo Small */}
            <Link to={all_routes.dashboard} className="logo-small">
              <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
            </Link>
            {/* Logo Dark */}
            <Link to={all_routes.dashboard} className="dark-logo">
              <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo" />
            </Link>
          </div>
         <button
            className="sidenav-toggle-btn btn border-0 p-0 active"
            id="toggle_btn"
            onClick={handleMiniSidebar}
          >
            <i className="ti ti-arrow-left" />
          </button>
          {/* Sidebar Menu Close */}
          <button className="sidebar-close" onClick={toggleMobileSidebar}>
            <i className="ti ti-x align-middle" />
          </button>
        </div>
        {/* End Logo */}
        {/* Sidenav Menu */}
        <div className="sidebar-inner" data-simplebar="">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main Menu</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      isActive(all_routes.doctordashboard) ? "active" : ""
                    }
                  >
                    <Link to={all_routes.doctordashboard}>
                      <i className="ti ti-layout-dashboard" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  {/* Appointments Submenu */}
                  <li
                    className={`submenu${
                      openSubmenus.appointments ? " active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("appointments");
                      }}
                    >
                      <i className="ti ti-calendar-check" />
                      <span>Appointments</span>
                      <span className="menu-arrow">
                        <i
                          className={
                            openSubmenus.appointments
                              ? "ti ti-chevron-down"
                              : "ti ti-chevron-right"
                          }
                        />
                      </span>
                    </Link>
                    <ul
                      style={{
                        display: openSubmenus.appointments ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to={all_routes.doctorsappointments}
                          className={
                            isActive(all_routes.doctorsappointments) ||
                            isActive(all_routes.doctorsappointmentdetails)
                              ? "active"
                              : ""
                          }
                        >
                          Appointments
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.onlineconsultations}
                          className={
                            isActive(all_routes.onlineconsultations)
                              ? "active"
                              : ""
                          }
                        >
                          Online Consultations
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      isActive(all_routes.doctorschedule) ? "active" : ""
                    }
                  >
                    <Link to={all_routes.doctorschedule}>
                      <i className="ti ti-clock-check" />
                      <span>My Schedule</span>
                    </Link>
                  </li>
                  <li
                    className={
                      isActive(all_routes.doctorsprescriptions)
                        ? "active"
                        : isActive(all_routes.doctorsprescriptiondetails)
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={all_routes.doctorsprescriptions}>
                      <i className="ti ti-prescription" />
                      <span>Prescriptions</span>
                    </Link>
                  </li>
                  <li
                    className={
                      isActive(all_routes.doctorleaves) ? "active" : ""
                    }
                  >
                    <Link to={all_routes.doctorleaves}>
                      <i className="ti ti-calendar-x" />
                      <span>Leave</span>
                    </Link>
                  </li>
                  <li
                    className={
                      isActive(all_routes.doctorreviews) ? "active" : ""
                    }
                  >
                    <Link to={all_routes.doctorreviews}>
                      <i className="ti ti-star" />
                      <span>Reviews</span>
                    </Link>
                  </li>
                  {/* Settings Submenu */}
                  <li
                    className={`submenu${
                      openSubmenus.settings ? " active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("settings");
                      }}
                    >
                      <i className="ti ti-settings" />
                      <span>Settings</span>
                      <span className="menu-arrow">
                        <i
                          className={
                            openSubmenus.settings
                              ? "ti ti-chevron-down"
                              : "ti ti-chevron-right"
                          }
                        />
                      </span>
                    </Link>
                    <ul
                      style={{
                        display: openSubmenus.settings ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to={all_routes.doctorsprofilesettings}
                          className={
                            isActive(all_routes.doctorsprofilesettings)
                              ? "active"
                              : ""
                          }
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.doctorspasswordsettings}
                          className={
                            isActive(all_routes.doctorspasswordsettings)
                              ? "active"
                              : ""
                          }
                        >
                          Change Password
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.doctorsnotificationsettings}
                          className={
                            isActive(all_routes.doctorsnotificationsettings)
                              ? "active"
                              : ""
                          }
                        >
                          Notifications
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="sidebar-footer border-top mt-3">
            <div className="trial-item mt-0 p-3 text-center">
              <div className="trial-item-icon rounded-4 mb-3 p-2 text-center shadow-sm d-inline-flex">
                <ImageWithBasePath
                  src="./assets/img/icons/sidebar-icon.svg"
                  alt="img"
                />
              </div>
              <div>
                <h6 className="fs-14 fw-semibold mb-1">Upgrade To Pro</h6>
                <p className="fs-13 mb-0">
                  Check 1 min video and begin use Symplify like a pro
                </p>
              </div>
              <Link to="#" className="close-icon shadow-sm">
                <i className="ti ti-x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Sidenav Menu End */}
    </>
  );
};

export default SidebarTwo;
