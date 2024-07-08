"use client";

import { login, logout } from "@/actions/auth";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";

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
  const { pending } = useFormStatus();
  return (
    <Button className={className} onClick={() => login(provider)} {...props}>
      {pending ? "..." : children}
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
    <Button className={className} onClick={() => logout()}>
      {children}
    </Button>
  );
};
