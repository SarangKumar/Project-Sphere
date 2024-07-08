// "use client";
import React from "react";
import { AvatarHoverCard } from "./user-profile";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";

const NavAuth = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      {session ? (
        <div className="flex items-center gap-x-2">
          <Link className={cn(buttonVariants())} href="/dashboard">
            Dashboard
          </Link>
          <AvatarHoverCard
            name={user?.name}
            email={user?.email}
            image={user?.image}
          />
        </div>
      ) : (
        <>
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Sign In
          </Link>
        </>
      )}
    </>
  );
};

export default NavAuth;
