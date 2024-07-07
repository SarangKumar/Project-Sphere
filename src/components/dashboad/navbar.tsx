"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import NavAuth from "../navbar/nav-auth";
import { AvatarHoverCard } from "../navbar/user-profile";

const DashboardNavbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav className="border-default bg-green-60 relative z-40 backdrop-blur-sm transition-opacity">
      <div className="relative mx-auto flex h-14 items-center justify-between px-4">
        <span></span>
        <span>
          <AvatarHoverCard
            name={user?.name || ""}
            email={user?.email || ""}
            image={user?.image || ""}
          />
        </span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
