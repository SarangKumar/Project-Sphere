"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import SubmitButton from "./submit-button";
import { toast } from "sonner";

const SignupForm = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/auth/sign-up", userdata);
      console.log(response.data);
      console.log(response.data);

      toast(response.data.message.title, {
        description: response.data.message.description,
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
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
        <Label htmlFor="email" className="font-normal">
          Username
        </Label>
        <Input
          className="text-xs text-secondary-foreground"
          name="name"
          id="name"
          placeholder="Alice Doe"
          required
          value={userdata.name}
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
          required
          id="password"
          autoComplete="current-password"
          placeholder="••••••••"
          type="password"
          onChange={handleChange}
          value={userdata.password}
        />
      </div>
      <div className="space-y-1 py-3">
        <SubmitButton className="h-9 w-full">Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
