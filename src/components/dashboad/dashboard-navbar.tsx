import { getServerSession } from "next-auth";
import React from "react";
import Logo from "../logo";
import { dashboardNavbarLinks } from "@/constants";
import NavLink from "./nav-links";
import { AvatarHoverCard } from "../navbar/user-profile";
import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getUserById } from "@/app/api/utils";

const DashboardNavbar = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  //   const u = await getUserById(session.user.id);
  //   console.log(session)

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  return (
    <div className="w-full space-y-4 border-b px-4 py-3 md:px-6">
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-4">
          <Logo asLink />{" "}
          <span className="text-sm font-semibold">{session.user.name}</span>
        </div>
        <AvatarHoverCard
          name={session.user.name}
          email={session.user.email}
          image={session.user.image}
        />
      </div>
      <nav className="flex items-center gap-x-4 overflow-x-auto">
        {dashboardNavbarLinks.map((link) => (
          <NavLink key={link.title} href={link.href} className="text-sm">
            {link.title}
          </NavLink>
        ))}
      </nav>
      {JSON.stringify(session)}
      {JSON.stringify(user, null, 1)}
    </div>
  );
};

export default DashboardNavbar;
