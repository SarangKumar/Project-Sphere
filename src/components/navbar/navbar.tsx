import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SignInButton } from "./auth-button";
import axios from "axios";
import { siteConfig } from "@/config/site";
import NavAuth from "./nav-auth";
import { cn } from "@/lib/utils";
import Logo from "../logo";

const Navbar = async () => {
  let githubStars: number = 0,
    githubForks = 0;
  try {
    const response = await axios.get(
      "https://api.github.com/repos/SarangKumar/Project-Sphere"
    );
    githubStars = response.data.stargazers_count;
    githubForks = response.data.forks_count;
  } catch (error) {
    githubStars = -1;
  }

  return (
    <nav className="border-default relative z-40 border-b backdrop-blur-sm transition-opacity">
      <div className="relative mx-auto flex h-16 items-center justify-between px-4 lg:container md:px-8 lg:px-16 xl:px-20">
        <div className="flex items-center gap-x-4">
          <Link href="/" className="flex items-center font-bold text-primary">
            <Logo className="mr-2" />
            Project Sphere
          </Link>

          <div className="flex items-center justify-between gap-x-2">
            {/* <Button asChild variant="destructive">
              <Link href="/about">About</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild variant="neon">
              <Link href="/docs">Docs</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/profile">Profile</Link>
            </Button> */}

            <a
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "inline-flex gap-x-2 px-2 text-secondary-foreground"
              )}
            >
              <GitHubLogoIcon className="size-[17px] text-secondary-foreground" />
              {githubStars !== -1 && (
                <span className="text-xxs text-secondary-foreground">
                  {githubStars}
                </span>
              )}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <NavAuth />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
