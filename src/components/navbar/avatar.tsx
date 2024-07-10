import Image from "next/image";
import React from "react";
import { getInitials } from "@/lib/utils";

const Avatar = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      {!image ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-secondary/50 text-sm font-medium shadow">
          {getInitials(name || "Guest")}
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
