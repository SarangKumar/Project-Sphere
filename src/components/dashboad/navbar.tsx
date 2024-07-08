import React from "react";
import { AvatarHoverCard } from "../navbar/user-profile";
import Logo from "../logo";
import { ChevronRight } from "lucide-react";
import { auth } from "@/auth";

const DashboardNavbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="border-default bg-green-60 relative z-40 backdrop-blur-sm transition-opacity">
      <div className="relative mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-x-1">
          <Logo />
          <ChevronRight className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {(user?.name || "").split(" ")[0]}&apos;s Dashboard
          </span>
        </div>
        <span>
          <AvatarHoverCard
            name={user?.name}
            email={user?.email}
            image={user?.image}
          />
        </span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
