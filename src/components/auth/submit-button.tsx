"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import LoadingDots from "../loading-dots";
import { cn } from "@/lib/utils";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const SubmitButton = ({ children, className, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  loading = loading || pending;

  return (
    <Button
      disabled={loading}
      type="submit"
      className={cn(className, loading && "cursor-not-allowed")}
    >
      {loading ? <LoadingDots variant="sm" /> : children}
    </Button>
  );
};

export default SubmitButton;
