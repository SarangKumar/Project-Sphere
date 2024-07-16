import Image from "next/image";
import React from "react";
import { cn, getInitials } from "@/lib/utils";
import BoringAvatar from "boring-avatars";

const Avatar = ({
  image,
  name,
  size,
  className,
}: {
  image: string;
  name: string;
  size: "base" | "sm" | "lg";
  className?: string;
}) => {
  return (
    <>
      {!image ? (
        <span className="relative">
          <span
            className={cn(
              "absolute flex h-full w-full items-center justify-center rounded-full border border-primary/20 font-medium shadow",
              size === "sm" && "h-6 w-6 text-xs",
              size === "base" && "h-8 w-8 text-sm",
              size === "lg" && "h-12 w-12 text-lg",
              className
            )}
          >
            {getInitials(name || "Guest")}
          </span>
          <BoringAvatar
            // colors={["#c44d12", "#f08849", "#e79a1e", "#c44d12", "#1e8ae7"]}
            // colors={["#f29c49", "#db6e23", "#ffb347", "#ff6f3c", "#ff934f"]}
            // colors={["#ffaf40", "#ff8c00", "#ffbd69", "#ff6347", "#ffa07a"]}
            colors={["#ff9f1c", "#ffaa00", "#ffcc80", "#ff5733", "#ff7f50"]}
            size={size === "sm" ? 24 : size === "base" ? 32 : 48}
            name={name}
          />
        </span>
      ) : (
        <Image
          src={image}
          height={size === "sm" ? 24 : size === "base" ? 32 : 48}
          width={size === "sm" ? 24 : size === "base" ? 32 : 48}
          alt={name}
          className="size-8 rounded-full"
        />
      )}
    </>
  );
};

export default Avatar;
