import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarItem({
  item,
  collapsed,
  toggleSidebar,
  isMobile,
  isDisabled,
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={isDisabled ? "#" : item.to}
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault();
          return;
        }

        if (isMobile) {
          toggleSidebar();
        }
      }}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
        ${
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : isActive
            ? "bg-primary/20 text-primary"
            : "text-[#919EAB] hover:bg-primary/10 hover:text-primary"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={
              isDisabled
                ? "opacity-40"
                : isActive
                ? "text-primary"
                : "group-hover:text-primary"
            }
          />

          {!collapsed && (
            <span className="font-normal text-lg tracking-wide">
              {item.label}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}