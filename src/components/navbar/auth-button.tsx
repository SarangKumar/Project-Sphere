"use client";

import { signIn, signOut } from "next-auth/react";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";

export interface SignInButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  provider: string;
}

export const SignInButton = ({
  provider,
  className,
  children,
  ...props
}: SignInButtonProps) => {
  return (
    <Button className={className} onClick={() => signIn(provider)} {...props}>
      {children}
    </Button>
  );
};

export const SignOutButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button className={className} onClick={() => signOut({ callbackUrl: "/" })}>
      {children}
    </Button>
  );
};
