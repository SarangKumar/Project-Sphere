import Logo from "@/components/logo";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: `%s | Authentication | ${siteConfig.name}`,
    default: `Authentication | ${siteConfig.name}`,
  },
  description:
    "Sign in or sign up securely on Project Sphere. Manage your account and access your projects with ease.",
  openGraph: {
    title: `Authentication | ${siteConfig.name}`,
    description:
      "Sign in or sign up securely on Project Sphere. Manage your account and access your projects with ease.",
    url: `${siteConfig.url}/authentication`,
    siteName: "Project Sphere",
    images: [
      {
        url: "https://projectsphere.com/authentication-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Project Sphere - Authentication",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Authentication | ${siteConfig.name}`,
    description:
      "Sign in or sign up securely on Project Sphere. Manage your account and access your projects with ease.",
    site: "",
    creator: "Sarang Kumar",
    images: [
      {
        url: "https://projectsphere.com/authentication-twitter-image.jpg",
        alt: `${siteConfig.name} - Authentication`,
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/authentication`,
  },
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-dvh grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <main className="flex flex-col justify-between gap-12 border border-r p-4 md:px-8">
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
