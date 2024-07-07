import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        className,
        "flex h-8 w-8 items-center justify-center rounded bg-primary font-extrabold text-white shadow-sm"
      )}
    >
      P
    </span>
  );
};

export default Logo;
