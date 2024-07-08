import SignupForm from "@/components/auth/signup-form";
import { SignInButton } from "@/components/auth/auth-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-4">
      <main className="mx-auto w-full flex-1 px-6 sm:max-w-screen-sm">
        <h1 className="my-2 text-2xl font-medium lg:text-3xl">Get started</h1>
        <p className="text-sm text-secondary-foreground">
          Create a new account
        </p>
        <div className="my-6 space-y-4">
          <SignInButton
            variant="outline"
            size="lg"
            className="flex w-full min-w-60 items-center gap-x-2 font-medium"
            provider="google"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 488 512"
              height="18px"
              className="stroke-secondary-foreground stroke-2 text-muted-foreground"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Continue with Google
          </SignInButton>
          <SignInButton
            className="flex w-full min-w-60 items-center gap-x-2 font-medium"
            variant="outline"
            size="lg"
            provider="github"
          >
            <GithubIcon
              size={18}
              className="stroke-secondary-foreground stroke-2 text-muted-foreground"
            />
            Continue with Github
          </SignInButton>
        </div>

        {/* <div className="relative text-center text-xs">
          <span className="z-10 bg-background px-1">or</span>
          <span className="absolute -z-10 flex w-full -translate-y-2 items-center border-b" />
        </div>

        <SignupForm />

        <p className="text-center text-xs">
          Have an account ?
          <Link
            className={cn(buttonVariants({ variant: "link" }))}
            href="/sign-in"
          >
            Sign In Now
          </Link>
        </p> */}
      </main>
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm">
        <p className="text-balance text-center text-xs text-muted-foreground">
          By continuing, you agree to Project Space&apos;s Terms of Service and
          Privacy Policy, and to receive periodic emails with updates.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
