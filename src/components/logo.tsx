import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  asLink = false,
}: {
  className?: string;
  asLink?: boolean;
}) => {
  if (asLink) {
    return (
      <Link
        href="/"
        className={cn(
          className,
          "flex h-8 w-8 items-center justify-center rounded bg-primary font-extrabold uppercase text-white shadow-sm"
        )}
      >
        P
      </Link>
    );
  } else {
    return (
      <span
        className={cn(
          className,
          "flex h-8 w-8 items-center justify-center rounded bg-primary font-extrabold uppercase text-white shadow-sm"
        )}
      >
        P
      </span>
    );
  }
};

export default Logo;
