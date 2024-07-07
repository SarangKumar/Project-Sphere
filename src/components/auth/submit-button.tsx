"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={className}
      // className={`${
      //   pending ? "bg-gray-600" : "bg-blue-600"
      // } w-full rounded-md px-12 py-3 text-sm font-medium text-white`}
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default SubmitButton;
