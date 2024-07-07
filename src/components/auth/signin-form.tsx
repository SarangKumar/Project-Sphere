import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { loginWithCreds } from "@/actions/auth";

const SignInForm = () => {
  return (
    <form action={loginWithCreds} className="my-6 space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email" className="font-normal">
          Email
        </Label>
        <Input
          className="text-xs text-secondary-foreground"
          name="email"
          id="email"
          placeholder="example@example.com"
          required
          type="email"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password" className="font-normal">
          Password
        </Label>
        <Input
          name="password"
          required
          id="password"
          autoComplete="current-password"
          placeholder="••••••••"
          type="password"
        />
      </div>
      <div className="space-y-1 py-3">
        <Button type="submit" className="h-9 w-full">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
