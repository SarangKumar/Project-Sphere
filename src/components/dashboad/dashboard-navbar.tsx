import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { AvatarHoverCard } from "../navbar/user-profile";

const DashboardNavbar = async ({ title }: { title: string }) => {
  const user = await getUserBySession({ project: false });

  if (!user) return null;
  return (
    <div className="sticky top-0 z-20 bg-background">
      <header className="flex h-12 items-center justify-between border-b px-4 md:px-6">
        <p className="text-sm text-secondary-foreground">{title}</p>
        <AvatarHoverCard
          name={user.name}
          email={user.email}
          image={user.image}
          size="base"
        />
      </header>
    </div>
  );
};

export default DashboardNavbar;
