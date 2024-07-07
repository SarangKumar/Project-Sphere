import { SessionProvider } from "next-auth/react";
import React from "react";
import { TooltipProvider } from "./ui/tooltip";
import { auth } from "@/lib/auth";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {/* <TooltipProvider> */}
      {children}
      {/* </TooltipProvider> */}
    </SessionProvider>
  );
};

export default Providers;
