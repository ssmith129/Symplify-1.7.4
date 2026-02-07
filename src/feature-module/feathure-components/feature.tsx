import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import Header from "../../core/common/header/header";
import ThemeSettings from "../../core/common/theme-settings";
import Sidebar from "../../core/common/sidebar/sidebar";
import SidebarTwo from "../../core/common/sidebar-two/sidebarTwo";
import Sidebarthree from "../../core/common/sidebarthree/sidebarthree";
import { setMobileSidebar } from "../../core/redux/sidebarSlice";
import { useCallback } from "react";
import type { RootState } from "../../core/redux/store";

const Feature = () => {
  const locations = useLocation();
  const path = locations.pathname;
  const dispatch = useDispatch();

  const themeSettings = useSelector((state: any) => state.theme.themeSettings);
  const { miniSidebar, mobileSidebar, expandMenu } = useSelector(
    (state: any) => state.sidebarSlice
  );
  const { currentRole, isTransitioning } = useSelector((state: RootState) => state.role);

  const closeSidebar = useCallback(() => {
    if (mobileSidebar) {
      dispatch(setMobileSidebar(false));
    }
  }, [mobileSidebar, dispatch]);

  const dataLayout = themeSettings["data-layout"];
  const dataWidth = themeSettings["data-width"];
  const dataSize = themeSettings["data-size"];
  const dir = themeSettings["dir"];

  return (
    <>
      <div
        className={`
        ${
          miniSidebar || dataLayout === "mini" || dataSize === "compact"
            ? "mini-sidebar"
            : ""
        }
        ${
          (expandMenu && miniSidebar) || (expandMenu && dataLayout === "mini")
            ? "expand-menu"
            : ""
        }
        ${mobileSidebar ? "menu-opened slide-nav" : ""}
        ${dataWidth === "box" ? "layout-box-mode mini-sidebar" : ""}
        ${dir === "rtl" ? "layout-mode-rtl" : ""}




      `}
      >
        <div className="main-wrapper">
          <Header />
          {/* Sidebar selection: use role state, with path fallback */}
          {path.startsWith("/doctor/") || currentRole === 'doctor' ? (
            <SidebarTwo />
          ) : path.startsWith("/patient/") || currentRole === 'patient' ? (
            <Sidebarthree />
          ) : (
            <Sidebar />
          )}

          <ThemeSettings />
          <Outlet />
        </div>
        <div
          className={`sidebar-overlay${mobileSidebar ? " opened" : ""}`}
          onClick={closeSidebar}
          onTouchStart={closeSidebar}
        />
      </div>
      {isTransitioning && (
        <div className="role-transition-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Switching role...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Feature;
