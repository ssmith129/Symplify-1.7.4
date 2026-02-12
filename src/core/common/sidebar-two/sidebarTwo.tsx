import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../imageWithBasePath";
import { all_routes } from "../../../feature-module/routes/all_routes";
import React, { useState, useEffect } from "react";
import { updateTheme } from "../../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { setExpandMenu, setMobileSidebar } from "../../redux/sidebarSlice";

interface SidebarTwoProps {
  onExpandEnter?: () => void;
  onExpandLeave?: () => void;
}

const SidebarTwo: React.FC<SidebarTwoProps> = ({ onExpandEnter, onExpandLeave }) => {
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
      prescriptions: isAnyActive([
        all_routes.doctorsprescriptions,
        all_routes.doctorsprescriptiondetails,
        all_routes.drugInteraction,
      ]),
      settings: isAnyActive([
        all_routes.doctorsprofilesettings,
        all_routes.doctorspasswordsettings,
        all_routes.doctorsnotificationsettings,
      ]),
      appCalls: isAnyActive([
        all_routes.voiceCall,
        all_routes.videoCall,
        all_routes.outgoingCall,
        all_routes.incomingCall,
        all_routes.callHistory,
      ]),
      appInvoices: isAnyActive([
        all_routes.invoice,
        all_routes.invoiceDetails,
      ]),
      clinicDoctors: isAnyActive([
        all_routes.doctors,
        all_routes.doctorsDetails,
        all_routes.addDoctors,
        all_routes.doctorScheduleClini,
      ]),
      clinicPatients: isAnyActive([
        all_routes.patients,
        all_routes.patientDetails,
        all_routes.createPatient,
      ]),
      clinicAppointments: isAnyActive([
        all_routes.appointments,
        all_routes.newAppointment,
        all_routes.appointmentCalendar,
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
      if (onExpandEnter) {
        onExpandEnter();
      } else {
        dispatch(setExpandMenu(true));
      }
    };
    const onMouseLeave = () => {
      if (onExpandLeave) {
        onExpandLeave();
      } else {
        dispatch(setExpandMenu(false));
      }
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
                  {/* Prescriptions Submenu */}
                  <li
                    className={`submenu${
                      openSubmenus.prescriptions ? " active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("prescriptions");
                      }}
                    >
                      <i className="ti ti-prescription" />
                      <span>Prescriptions</span>
                      <span className="menu-arrow">
                        <i
                          className={
                            openSubmenus.prescriptions
                              ? "ti ti-chevron-down"
                              : "ti ti-chevron-right"
                          }
                        />
                      </span>
                    </Link>
                    <ul
                      style={{
                        display: openSubmenus.prescriptions ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to={all_routes.doctorsprescriptions}
                          className={
                            isActive(all_routes.doctorsprescriptions) ||
                            isActive(all_routes.doctorsprescriptiondetails)
                              ? "active"
                              : ""
                          }
                        >
                          Prescriptions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.drugInteraction}
                          className={
                            isActive(all_routes.drugInteraction)
                              ? "active"
                              : ""
                          }
                        >
                          <i className="ti ti-pill me-1" style={{ fontSize: 14 }} />
                          Drug Interaction Checker
                        </Link>
                      </li>
                    </ul>
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
                </ul>
              </li>
              {/* Applications Section */}
              <li className="menu-title">
                <span>Applications</span>
              </li>
              <li>
                <ul>
                  <li className={isActive(all_routes.chat) ? "active" : ""}>
                    <Link to={all_routes.chat}>
                      <i className="ti ti-message-circle" />
                      <span>Chat</span>
                    </Link>
                  </li>
                  {/* Calls Submenu */}
                  <li className={`submenu${openSubmenus.appCalls ? " active" : ""}`}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("appCalls");
                      }}
                    >
                      <i className="ti ti-phone" />
                      <span>Calls</span>
                      <span className="menu-arrow">
                        <i className={openSubmenus.appCalls ? "ti ti-chevron-down" : "ti ti-chevron-right"} />
                      </span>
                    </Link>
                    <ul style={{ display: openSubmenus.appCalls ? "block" : "none" }}>
                      <li>
                        <Link to={all_routes.voiceCall} className={isActive(all_routes.voiceCall) ? "active" : ""}>Voice Call</Link>
                      </li>
                      <li>
                        <Link to={all_routes.videoCall} className={isActive(all_routes.videoCall) ? "active" : ""}>Video Call</Link>
                      </li>
                      <li>
                        <Link to={all_routes.outgoingCall} className={isActive(all_routes.outgoingCall) ? "active" : ""}>Outgoing Call</Link>
                      </li>
                      <li>
                        <Link to={all_routes.incomingCall} className={isActive(all_routes.incomingCall) ? "active" : ""}>Incoming Call</Link>
                      </li>
                      <li>
                        <Link to={all_routes.callHistory} className={isActive(all_routes.callHistory) ? "active" : ""}>Call History</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={isActive(all_routes.calendar) ? "active" : ""}>
                    <Link to={all_routes.calendar}>
                      <i className="ti ti-calendar" />
                      <span>Calendar</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.contacts) ? "active" : ""}>
                    <Link to={all_routes.contacts}>
                      <i className="ti ti-address-book" />
                      <span>Contacts</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.email) ? "active" : ""}>
                    <Link to={all_routes.email}>
                      <i className="ti ti-mail" />
                      <span>Email</span>
                    </Link>
                  </li>
                  {/* Invoices Submenu */}
                  <li className={`submenu${openSubmenus.appInvoices ? " active" : ""}`}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("appInvoices");
                      }}
                    >
                      <i className="ti ti-file-invoice" />
                      <span>Invoices</span>
                      <span className="menu-arrow">
                        <i className={openSubmenus.appInvoices ? "ti ti-chevron-down" : "ti ti-chevron-right"} />
                      </span>
                    </Link>
                    <ul style={{ display: openSubmenus.appInvoices ? "block" : "none" }}>
                      <li>
                        <Link to={all_routes.invoice} className={isActive(all_routes.invoice) ? "active" : ""}>Invoices</Link>
                      </li>
                      <li>
                        <Link to={all_routes.invoiceDetails} className={isActive(all_routes.invoiceDetails) ? "active" : ""}>Invoice Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={isActive(all_routes.todo) ? "active" : ""}>
                    <Link to={all_routes.todo}>
                      <i className="ti ti-checkbox" />
                      <span>To Do</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.notes) ? "active" : ""}>
                    <Link to={all_routes.notes}>
                      <i className="ti ti-notes" />
                      <span>Notes</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.kanbanView) ? "active" : ""}>
                    <Link to={all_routes.kanbanView}>
                      <i className="ti ti-layout-kanban" />
                      <span>Kanban Board</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.fileManager) ? "active" : ""}>
                    <Link to={all_routes.fileManager}>
                      <i className="ti ti-folder" />
                      <span>File Manager</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Clinic Section */}
              <li className="menu-title">
                <span>Clinic</span>
              </li>
              <li>
                <ul>
                  {/* Clinic Doctors Submenu */}
                  <li className={`submenu${openSubmenus.clinicDoctors ? " active" : ""}`}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("clinicDoctors");
                      }}
                    >
                      <i className="ti ti-user-plus" />
                      <span>Doctors</span>
                      <span className="menu-arrow">
                        <i className={openSubmenus.clinicDoctors ? "ti ti-chevron-down" : "ti ti-chevron-right"} />
                      </span>
                    </Link>
                    <ul style={{ display: openSubmenus.clinicDoctors ? "block" : "none" }}>
                      <li>
                        <Link to={all_routes.doctors} className={isActive(all_routes.doctors) ? "active" : ""}>Doctors</Link>
                      </li>
                      <li>
                        <Link to={all_routes.doctorsDetails} className={isActive(all_routes.doctorsDetails) ? "active" : ""}>Doctor Details</Link>
                      </li>
                      <li>
                        <Link to={all_routes.addDoctors} className={isActive(all_routes.addDoctors) ? "active" : ""}>Add Doctor</Link>
                      </li>
                      <li>
                        <Link to={all_routes.doctorScheduleClini} className={isActive(all_routes.doctorScheduleClini) ? "active" : ""}>Doctor Schedule</Link>
                      </li>
                    </ul>
                  </li>
                  {/* Clinic Patients Submenu */}
                  <li className={`submenu${openSubmenus.clinicPatients ? " active" : ""}`}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("clinicPatients");
                      }}
                    >
                      <i className="ti ti-user-heart" />
                      <span>Patients</span>
                      <span className="menu-arrow">
                        <i className={openSubmenus.clinicPatients ? "ti ti-chevron-down" : "ti ti-chevron-right"} />
                      </span>
                    </Link>
                    <ul style={{ display: openSubmenus.clinicPatients ? "block" : "none" }}>
                      <li>
                        <Link to={all_routes.patients} className={isActive(all_routes.patients) ? "active" : ""}>Patients</Link>
                      </li>
                      <li>
                        <Link to={all_routes.patientDetails} className={isActive(all_routes.patientDetails) ? "active" : ""}>Patient Details</Link>
                      </li>
                      <li>
                        <Link to={all_routes.createPatient} className={isActive(all_routes.createPatient) ? "active" : ""}>Create Patient</Link>
                      </li>
                    </ul>
                  </li>
                  {/* Clinic Appointments Submenu */}
                  <li className={`submenu${openSubmenus.clinicAppointments ? " active" : ""}`}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggle("clinicAppointments");
                      }}
                    >
                      <i className="ti ti-calendar-check" />
                      <span>Appointments</span>
                      <span className="menu-arrow">
                        <i className={openSubmenus.clinicAppointments ? "ti ti-chevron-down" : "ti ti-chevron-right"} />
                      </span>
                    </Link>
                    <ul style={{ display: openSubmenus.clinicAppointments ? "block" : "none" }}>
                      <li>
                        <Link to={all_routes.appointments} className={isActive(all_routes.appointments) ? "active" : ""}>Appointments</Link>
                      </li>
                      <li>
                        <Link to={all_routes.newAppointment} className={isActive(all_routes.newAppointment) ? "active" : ""}>New Appointment</Link>
                      </li>
                      <li>
                        <Link to={all_routes.appointmentCalendar} className={isActive(all_routes.appointmentCalendar) ? "active" : ""}>Calendar</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={isActive(all_routes.locations) ? "active" : ""}>
                    <Link to={all_routes.locations}>
                      <i className="ti ti-map-pin" />
                      <span>Locations</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.services) ? "active" : ""}>
                    <Link to={all_routes.services}>
                      <i className="ti ti-briefcase" />
                      <span>Services</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.specializations) ? "active" : ""}>
                    <Link to={all_routes.specializations}>
                      <i className="ti ti-user-shield" />
                      <span>Specializations</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.assets) ? "active" : ""}>
                    <Link to={all_routes.assets}>
                      <i className="ti ti-package" />
                      <span>Assets</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.activities) ? "active" : ""}>
                    <Link to={all_routes.activities}>
                      <i className="ti ti-activity" />
                      <span>Activities</span>
                    </Link>
                  </li>
                  <li className={isActive(all_routes.messages) ? "active" : ""}>
                    <Link to={all_routes.messages}>
                      <i className="ti ti-message" />
                      <span>Messages</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Doctor Settings Section */}
              <li className="menu-title">
                <span>Settings</span>
              </li>
              <li>
                <ul>
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
