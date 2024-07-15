"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectNavLinks = ({
  projectId,
  disableLinks,
  href,
  title,
  icon,
}: {
  projectId: string;
  disableLinks: boolean;
  title: string;
  href: string;
  icon?: React.ReactNode;
}) => {
  href = `/dashboard/project/${projectId}${href}`;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative">
      <Link
        href={href}
        className={cn(
          "justify-cente flex items-center gap-x-2 rounded p-2.5 transition-colors @container hover:bg-secondary/40",
          isActive && "bg-secondary/40",
          disableLinks && "pointer-events-none cursor-not-allowed"
        )}
      >
        <span
          className={cn(
            "size-5 shrink-0 text-secondary-foreground",
            isActive && "text-foreground"
          )}
        >
          {icon}
        </span>
        <span
          className={cn(
            "@[2rem] project-link flex-1 -translate-x-3 whitespace-nowrap text-xs text-secondary-foreground opacity-0 transition-all @[2rem]:translate-x-0 @[2rem]:opacity-100",
            isActive && "text-foreground"
          )}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default ProjectNavLinks;
