import Image from "next/image";
import React from "react";
import { getInitials } from "@/lib/utils";
import BoringAvatar from "boring-avatars";

const Avatar = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      {!image ? (
        <span className="relative">
          <span className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-secondary/50 text-sm font-medium shadow">
            {getInitials(name || "Guest")}
          </span>
          <BoringAvatar
            // colors={["#c44d12", "#f08849", "#e79a1e", "#c44d12", "#1e8ae7"]}
            // colors={["#f29c49", "#db6e23", "#ffb347", "#ff6f3c", "#ff934f"]}
            // colors={["#ffaf40", "#ff8c00", "#ffbd69", "#ff6347", "#ffa07a"]}
            colors={["#ff9f1c", "#ffaa00", "#ffcc80", "#ff5733", "#ff7f50"]}
            size="32"
            name={name}
          />
        </span>
      ) : (
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="size-8 rounded-full"
        />
      )}
    </>
  );
};

export default Avatar;
