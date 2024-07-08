"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import LoadingDots from "../loading-dots";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className={className}>
      {pending ? <LoadingDots variant="sm" /> : children}
    </Button>
  );
};

export default SubmitButton;
