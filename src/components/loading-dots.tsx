import { cn } from "@/lib/utils";
import React from "react";

const LoadingDots = ({
  variant = "base",
}: {
  variant?: "xs" | "sm" | "base" | "lg";
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "flex",
          variant === "lg" && "space-x-1",
          variant === "base" && "space-x-[3px]",
          variant === "sm" && "space-x-0.5",
          variant === "xs" && "space-x-0.5"
        )}
      >
        <div
          className={cn(
            "dot animate-fade rounded-full bg-foreground",
            variant === "lg" && "size-2",
            variant === "base" && "size-1.5",
            variant === "sm" && "size-1",
            variant === "xs" && "size-0.5"
          )}
        />
        <div
          className={cn(
            "dot animate-fade rounded-full bg-foreground delay-180",
            variant === "lg" && "size-2",
            variant === "base" && "size-1.5",
            variant === "sm" && "size-1",
            variant === "xs" && "size-0.5"
          )}
        />
        <div
          className={cn(
            "dot animate-fade rounded-full bg-foreground delay-360",
            variant === "lg" && "size-2",
            variant === "base" && "size-1.5",
            variant === "sm" && "size-1",
            variant === "xs" && "size-0.5"
          )}
        />
      </div>
    </div>
  );
};

export default LoadingDots;
