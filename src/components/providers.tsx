"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { TooltipProvider } from "./ui/tooltip";
// import { auth } from "@/auth";

const Providers = ({ children }: { children: React.ReactNode }) => {
  // const session = await auth();
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
};

export default Providers;
