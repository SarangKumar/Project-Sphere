import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { SignOutButton } from "./auth-button";

export const UserProfile = ({
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
      <>
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="size-8 rounded-full"
        />
        <span className="sr-only">{name} thumbnail</span>
      </>
      <div className="flex flex-col items-start">
        <span className="text-xxs">{name}</span>
        <span className="text-xxs">{email}</span>
      </div>
    </div>
  );
};

export const AvatarHoverCard = ({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button>
          <>
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="size-8 rounded-full"
            />
            {/* <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar> */}
            <span className="sr-only">Open user profile</span>
          </>
        </button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="">
          <UserProfile name={name} email={email} image={image} />
          <div className="mt-4 flex justify-end">
            <SignOutButton>Sign Out</SignOutButton>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
