"use client";
import React from "react";
import { SignInButton, SignOutButton } from "./auth-button";
import { useSession } from "next-auth/react";
import { AvatarHoverCard } from "./user-profile";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const NavAuth = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      {session ? (
        <div className="flex items-center gap-x-2">
          <Link className={cn(buttonVariants())} href="/dashboard">
            Dashboard
          </Link>
          <AvatarHoverCard
            name={user?.name || ""}
            email={user?.email || ""}
            image={user?.image || ""}
          />
        </div>
      ) : (
        <>
          <SignInButton provider="github">Sign In Github</SignInButton>
          <SignInButton provider="google">Sign In Google</SignInButton>
        </>
      )}
    </>
  );
};

export default NavAuth;
