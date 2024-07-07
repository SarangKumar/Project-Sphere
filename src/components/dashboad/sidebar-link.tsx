"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon?: React.ReactNode;
  title: string;
}

const SidebarLink: React.FC<
  React.HTMLProps<HTMLAnchorElement> & SidebarLinkProps
> = ({ href, title, icon, children, className, ...props }) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "flex items-center justify-center gap-x-2 rounded p-1.5 text-sm @container hover:bg-secondary @[70px]:justify-start",
        pathname === href ? "bg-secondary" : "",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
