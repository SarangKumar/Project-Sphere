import React from "react";
import Logo from "../logo";
import { dashboardNavbarLinks } from "@/constants";
import NavLink from "./nav-links";
import { AvatarHoverCard } from "../navbar/user-profile";
import { getUserBySession } from "@/app/api/utils";

const DashboardNavbar = async () => {
  const user = await getUserBySession({ project: false });

  if (!user) return null;

  return (
    <div className="w-full space-y-4 border-b px-4 md:px-6">
      <div className="flex items-center justify-between gap-x-2 pt-4">
        <div className="flex items-center gap-x-4">
          <Logo asLink />{" "}
          <span className="text-sm font-semibold">{user.name}</span>
        </div>
        <AvatarHoverCard
          name={user.name}
          email={user.email}
          image={user.image}
        />
      </div>
      <nav className="flex items-center gap-x-3 pb-1.5">
        {dashboardNavbarLinks.map((link) => (
          <NavLink key={link.title} href={link.href} className="text-sm">
            {link.title}
          </NavLink>
        ))}
      </nav>
      {/* {process.env.NODE_ENV === "development" && (
        <>
          {JSON.stringify(user)}
        </>
      )} */}
    </div>
  );
};

export default DashboardNavbar;
