import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import React from "react";

const AuthenticationCard = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "card",
        "group/card grid grid-cols-1 gap-4 @container/card",
        className
      )}
    >
      <div className="flex flex-row justify-between @sm/card:justify-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="grid size-10 place-items-center rounded bg-background">
              <LockKeyhole className="stroke-primary stroke-[1.8]" />
            </span>
            <h3 className="text-center text-lg font-medium text-foreground lg:text-left">
              Authentication
            </h3>
            <p className="text-balance text-center text-sm text-secondary-foreground lg:text-left">
              Ensure secure access to your projects with robust authentication.
              Protect your data and manage user permissions with ease.
            </p>
          </div>
          <menu
            className={cn(
              "-m-8 grid translate-y-10 grid-cols-2 gap-2 text-xs md:-m-16",
              GeistMono.className
            )}
          >
            <AuthListItem>Auth Required</AuthListItem>
            <AuthListItem>
              <ShieldCheck size={16} className="inline-flex items-center" />{" "}
              Security
            </AuthListItem>
            <AuthListItem>API_SECRET</AuthListItem>
            <AuthListItem>master@gmail.com</AuthListItem>
            <AuthListItem>Access Denied</AuthListItem>
            <AuthListItem>secret password</AuthListItem>
          </menu>
        </div>
      </div>

      <div className="relative flex translate-y-10 flex-col place-items-center md:translate-y-0"></div>
    </section>
  );
};

export default AuthenticationCard;

const AuthListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="transition-color relative flex h-12 items-center justify-center gap-x-1 overflow-hidden whitespace-nowrap rounded-md border border-border transition-all duration-300 group-hover/card:border-primary group-hover/card:shadow">
      <span className="absolute left-1/2 top-1/2 h-6 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted blur-sm duration-300 group-hover/card:opacity-0" />
      <span className="text-primary duration-300">{children}</span>
    </li>
  );
};
