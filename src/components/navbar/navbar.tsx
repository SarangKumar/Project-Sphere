import React from "react";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { siteConfig } from "@/config/site";
import NavAuth from "./nav-auth";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import { formatCompactNumber } from "@/lib/formatters";
import { buttonVariants } from "../ui/button";

const Navbar = async () => {
  let githubStars: string | number = 0,
    githubForks: string | number = 0;
  try {
    const response = await axios.get(
      "https://api.github.com/repos/SarangKumar/Project-Sphere"
    );
    githubStars = formatCompactNumber(response.data.stargazers_count);
  } catch (error) {
    // console.log(error);
    githubStars = "-1";
  }

  return (
    <nav className="border-default relative z-40 border-b backdrop-blur-sm transition-opacity">
      <div className="relative mx-auto flex h-16 items-center justify-between px-4 lg:container md:px-8 lg:px-16 xl:px-20">
        <div className="flex items-center gap-x-4">
          <Link href="/" className="flex items-center font-bold text-primary">
            <Logo className="mr-2" asLink={false} />
            <span className="hidden md:inline">Project Sphere</span>
          </Link>

          <div className="flex items-center justify-between gap-x-2">
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
              {githubStars !== "-1" && (
                <span className="text-xxs text-secondary-foreground">
                  {githubStars}
                </span>
              )}
              {/* <span className="text-xxs text-secondary-foreground">
                {githubStars}
              </span> */}
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
