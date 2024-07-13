"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<React.HTMLProps<HTMLAnchorElement> & NavLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  const activeLink = usePathname() === href;
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-md px-2 py-1.5 text-sm text-secondary-foreground transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-foreground",
        activeLink &&
          "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-foreground after:content-['']",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
