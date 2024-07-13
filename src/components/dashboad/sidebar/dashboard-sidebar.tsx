import { dashboardNavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "../../ui/scroll-area";
import SidebarStatus from "./sidebar-status";
import ActiveLink from "./active-link";

const DashboardSidebar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        "sticky top-0 flex h-dvh w-1/5 max-w-[260px] flex-col border-r sm:w-full",
        className
      )}
    >
      <h3 className="flex h-12 items-center truncate border-b px-6 text-lg text-foreground">
        Dashboard
      </h3>
      <div className="block flex-1 text-sm">
        {dashboardNavbarLinks.map((sectionLink) => (
          <menu className="space-y-2 border-b p-6" key={sectionLink.name}>
            <li className="truncate font-light text-secondary-foreground">
              {sectionLink.name}
            </li>
            {sectionLink.links.map((link) => {
              return (
                <li key={link.title} className="truncate">
                  <ActiveLink href={link.href}>{link.title}</ActiveLink>
                </li>
              );
            })}
          </menu>
        ))}
      </div>
      <SidebarStatus />
    </aside>
  );
};

export default DashboardSidebar;
