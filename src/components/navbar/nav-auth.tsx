"use client";
import React from "react";
import { SignInButton, SignOutButton } from "./auth-button";
import { useSession } from "next-auth/react";
import UserProfile from "./user-profile";
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
          <SignOutButton>Sign Out</SignOutButton>
          <UserProfile
            name={user?.name || ""}
            email={user?.email || ""}
            image={user?.image || ""}
          />
        </div>
      ) : (
        <SignInButton provider="google">Sign In</SignInButton>
      )}
    </>
  );
};

export default NavAuth;
