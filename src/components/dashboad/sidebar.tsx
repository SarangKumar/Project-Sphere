import React from "react";
import { dashboardSidebarLinks } from "@/constants";
import SidebarLink from "./sidebar-link";

const DashboardSidebar = () => {
  return (
    <aside className="h-full p-2">
      <div className="flex flex-col gap-y-1 @container">
        {dashboardSidebarLinks.map((link) => (
          <SidebarLink
            key={link.title}
            title={link.title}
            icon={link.icon}
            href={link.href}
          >
            {link.icon}
            <span className="hidden @[60px]:flex">{link.title}</span>
          </SidebarLink>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
