import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { navLinks } from "@/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const DashboardSidebar = () => {
  return (
    <aside className="h-full p-2">
      <div className="flex flex-col gap-y-1 @container">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            className={cn(
              "flex items-center justify-center gap-x-2 rounded p-1.5 text-sm @container hover:bg-secondary @[64px]:justify-start"
            )}
            href={link.href}
          >
            {link.icon}
            {/* <Tooltip>
              <TooltipTrigger asChild>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="z-30">{link.title}</p>
              </TooltipContent> */}
            {/* </Tooltip> */}
            <span className="hidden @[60px]:flex">{link.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
