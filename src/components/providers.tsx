"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { TooltipProvider } from "./ui/tooltip";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
};

export default Providers;
