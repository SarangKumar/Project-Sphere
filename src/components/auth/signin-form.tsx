"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SubmitButton from "./submit-button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { SigninSchema } from "@/types/schema";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const validation = SigninSchema.safeParse(userdata);

      if (!validation.success) {
        validation.error.errors.forEach((error) => {
          toast.error(error.message);
        });
        setLoading(false);
        return;
      }

      const response = await signIn("credentials", {
        redirect: false,
        email: userdata.email,
        password: userdata.password,
      });

      if (response && !response.error) {
        toast.success("Login successful");
        router.push("/dashboard");
      } else {
        toast.error(response?.error || "Login failed");
      }
    } catch (error: any) {
      toast.error("An unexpected error occurred");
      console.error(error);
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
          autoComplete="email"
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
