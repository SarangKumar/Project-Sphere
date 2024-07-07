import { SessionProvider } from "next-auth/react";
import React from "react";
// import { TooltipProvider } from "./ui/tooltip";
import { auth } from "@/auth";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  // console.log(session)
  return (
    <SessionProvider session={session}>
      {/* <TooltipProvider> */}
      {children}
      {/* </TooltipProvider> */}
    </SessionProvider>
  );
};

export default Providers;
