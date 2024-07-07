import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const SignupForm = () => {
  return (
    <div className="my-6 space-y-4">
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
        <Button className="h-9 w-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default SignupForm;
