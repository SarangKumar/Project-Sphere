"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SubmitButton from "./submit-button";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
    try {
      setLoading(true);
      const resp = await signIn("credentials", {
        email: userdata.email,
        password: userdata.password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
      console.log(resp);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleLogin} className="my-6 space-y-4">
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
          value={userdata.email}
          onChange={handleChange}
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
          value={userdata.password}
          onChange={handleChange}
          autoComplete="current-password"
          placeholder="••••••••"
          type="password"
        />
      </div>
      <div className="space-y-1 py-3">
        <SubmitButton loading={loading} className="h-9 w-full">
          Sign In
        </SubmitButton>
      </div>
    </form>
  );
};

export default SignInForm;
