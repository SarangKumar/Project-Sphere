import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { AvatarHoverCard } from "../navbar/user-profile";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import DashboardSidebar from "./sidebar/dashboard-sidebar";

const DashboardNavbar = async ({ title }: { title: string }) => {
  const user = await getUserBySession({ project: false });

  if (!user) return null;
  return (
    <Sheet>
      <div className="sticky top-0 z-20 bg-background">
        <header className="flex h-12 items-center justify-between border-b px-4 md:px-6">
          <span className="flex items-center gap-x-2">
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <p className="text-sm text-secondary-foreground">{title}</p>
          </span>
          <AvatarHoverCard
            name={user.name}
            email={user.email}
            image={user.image}
            size="base"
          />
        </header>
      </div>
      <SheetContent side="left" className="w-[280px] p-0">
        <DashboardSidebar className="flex" />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardNavbar;
