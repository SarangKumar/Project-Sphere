import Image from "next/image";
import React from "react";

const UserProfile = ({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex flex-col items-end">
        <span className="text-xxs">{name}</span>
        <span className="text-xxs">{email}</span>
      </div>
      <>
        <Image
          src={image}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="sr-only">{name} thumbnail</span>
      </>
    </div>
  );
};

export default UserProfile;
