import React from "react";
import { AvatarHoverCard } from "./user-profile";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const NavAuth = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div className="flex items-center gap-x-2">
          <Link className={cn(buttonVariants())} href="/dashboard">
            Dashboard
          </Link>
          <AvatarHoverCard
            name={session?.user?.name}
            email={session?.user?.email}
            image={session?.user?.image}
          />
        </div>
      ) : (
        <>
          <Link
            href="/auth/sign-in"
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
