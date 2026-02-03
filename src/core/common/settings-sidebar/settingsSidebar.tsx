import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

import { sidebarMenus } from "./settingsSidebarData";



const SettingsSidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  // Open the menu if any submenu is active
  useEffect(() => {
    const activeMenus: number[] = [];
    sidebarMenus.forEach((menu, idx) => {
      if (menu.submenus.some((sub) => sub.to === location.pathname)) {
        activeMenus.push(idx);
      }
    });
    setOpenMenus(activeMenus);
  }, [location.pathname]);

  const handleMenuClick = (idx: number) => {
    setOpenMenus((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="sidebars settings-sidebar" id="sidebar2">
      <div className="sidebar-inner" data-simplebar="">
        <div id="sidebar-menu5" className="sidebar-menu mt-0 p-0">
          <ul>
            {sidebarMenus.map((menu, idx) => {
              const isOpen = openMenus.includes(idx);
              const isActive = menu.submenus.some((sub) => sub.to === location.pathname);

              return (
                <li className={`submenu${isOpen ? " open" : ""}`} key={menu.label}>
                  <Link
                    to="#"
                    className={
                      isOpen
                        ? isActive
                          ? "subdrop active"
                          : "subdrop"
                        : isActive
                          ? "active"
                          : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(idx);
                    }}
                  >
                    <i className={menu.icon} />
                    <span>{menu.label}</span>
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: isOpen ? "block" : "none" }}>
                    {menu.submenus.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          to={sub.to}
                          className={location.pathname === sub.to ? "active" : ""}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
