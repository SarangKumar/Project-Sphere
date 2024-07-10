import Logo from "@/components/logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-dvh grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <main className="flex flex-col justify-between gap-12 border border-r p-4 md:px-8 md:py-6">
        <Logo asLink={true} />
        {children}
      </main>
      <div className="hidden justify-center bg-secondary p-16 md:col-span-1 md:flex lg:col-span-2">
        <div className="mx-auto flex max-w-[480px] items-center justify-center text-sm md:text-base lg:text-lg">
          Project Sphere is a collaborative platform that allows users to create
          and manage projects. Users can sign in, create projects, and share
          them with others through a link. The platform also integrates Stripe
          for subscriptions, allowing users to create more projects. Each
          project includes a built-in ChatGPT assistant to help with various
          tasks.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
