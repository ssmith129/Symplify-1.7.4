import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import Header from "../../core/common/header/header";
import ThemeSettings from "../../core/common/theme-settings";
import Sidebar from "../../core/common/sidebar/sidebar";
import SidebarTwo from "../../core/common/sidebar-two/sidebarTwo";
import Sidebarthree from "../../core/common/sidebarthree/sidebarthree";
import { setMobileSidebar, setExpandMenu } from "../../core/redux/sidebarSlice";
import { useCallback, useRef } from "react";
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

  // Left-edge hover zone: expand sidebar on hover with collapse delay
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMiniMode = miniSidebar || dataLayout === 'mini' || dataSize === 'compact';

  const expandSidebar = useCallback(() => {
    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
    if (isMiniMode) {
      dispatch(setExpandMenu(true));
    }
  }, [isMiniMode, dispatch]);

  const scheduleSidebarCollapse = useCallback(() => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    collapseTimer.current = setTimeout(() => {
      dispatch(setExpandMenu(false));
      collapseTimer.current = null;
    }, 250);
  }, [dispatch]);

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
        {/* Left-edge hover zone for sidebar auto-expand */}
        {isMiniMode && (
          <div
            className="sidebar-hover-zone"
            onMouseEnter={expandSidebar}
            onMouseLeave={scheduleSidebarCollapse}
            aria-hidden="true"
          />
        )}
        <div className="main-wrapper">
          <Header />
          {/* Sidebar selection: use role state, with path fallback */}
          {path.startsWith("/doctor/") || currentRole === 'doctor' ? (
            <SidebarTwo onExpandEnter={expandSidebar} onExpandLeave={scheduleSidebarCollapse} />
          ) : path.startsWith("/patient/") || currentRole === 'patient' ? (
            <Sidebarthree onExpandEnter={expandSidebar} onExpandLeave={scheduleSidebarCollapse} />
          ) : (
            <Sidebar onExpandEnter={expandSidebar} onExpandLeave={scheduleSidebarCollapse} />
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
