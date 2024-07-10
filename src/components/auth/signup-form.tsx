"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import SubmitButton from "./submit-button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SignupSchema } from "@/types/schema";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const validation = SignupSchema.safeParse(userdata);
    console.log(validation);

    if (!validation.success) {
      validation.error.errors.forEach((error) => {
        toast.error(error.message);
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/v1/auth/sign-up", userdata);

      if (response.data.success) {
        toast.success(response.data.message.description);
        router.push("/auth/sign-in");
      } else {
        toast.error(response.data.message.description);
      }
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message);
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
    <form onSubmit={handleSignup} className="my-6 space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name" className="font-normal">
          Username
        </Label>
        <Input
          className="text-xs text-secondary-foreground"
          name="name"
          id="username"
          placeholder="Alice Doe"
          required
          value={userdata.name}
          autoComplete="username"
          onChange={handleChange}
          type="text"
        />
      </div>

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
          onChange={handleChange}
          value={userdata.email}
          type="email"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password" className="font-normal">
          Password
        </Label>
        <Input
          name="password"
          // required
          id="password"
          autoComplete="current-password"
          placeholder="••••••••"
          type="password"
          onChange={handleChange}
          value={userdata.password}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirm-password" className="font-normal">
          Confirm Password
        </Label>
        <Input
          name="confirmPassword"
          required
          id="password"
          autoComplete="current-password"
          placeholder="••••••••"
          type="password"
          onChange={handleChange}
          value={userdata.confirmPassword}
        />
      </div>
      <div className="space-y-1 py-3">
        <SubmitButton loading={loading} className="h-9 w-full">
          Sign Up
        </SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
