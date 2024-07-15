import React from "react";
import { dashboardNavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import SidebarStatus from "./sidebar-status";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ActiveLink from "./active-link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const DashboardSidebar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        "xs:w-1/5 sticky top-0 hidden h-dvh max-w-[280px] shrink flex-col border-r sm:w-full md:flex",
        className
      )}
    >
      <h3 className="flex h-12 items-center truncate border-b px-6 text-lg text-foreground">
        Dashboard
      </h3>
      <div className="block flex-1 overflow-y-auto text-sm">
        {dashboardNavbarLinks.map((sectionLink) => (
          <menu
            className="space-y-2 border-b p-4 md:p-6"
            key={sectionLink.name}
          >
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
      <SidebarStatus className="p-4" />
    </aside>
  );
};

export default DashboardSidebar;

export const DashboardSidebarMain = () => {
  return (
    <aside>
      <div className="p-0 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <DashboardSidebar className="border-t" />
      </div>
    </aside>
  );
};
