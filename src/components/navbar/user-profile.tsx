import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { SignOutButton } from "../auth/auth-button";
import Avatar from "./avatar";

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
        <Avatar image={image} name={name} />
        <span className="sr-only">{name} thumbnail</span>
      </>
      <div className="flex flex-col items-start">
        <span className="text-xxs">{name || "Guest User"}</span>
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
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}) => {
  name = name || "Guest User";
  email = email || "";
  image = image || "";

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button>
          <>
            <Avatar image={image} name={name} />
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
