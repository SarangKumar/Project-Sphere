"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export const SignInButton = ({
  provider,
  children,
}: {
  provider: string;
  children: React.ReactNode;
}) => {
  return <Button onClick={() => signIn(provider)}>{children}</Button>;
};

export const SignOutButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>{children}</Button>
  );
};
