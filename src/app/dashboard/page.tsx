import React from "react";
import { getUserBySession } from "../api/utils";
import DashboardSidebar, {
  DashboardSidebarMain,
} from "@/components/dashboad/sidebar/dashboard-sidebar";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import ProjectCard from "@/components/dashboad/project-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import SearchProject from "@/components/dashboad/search-project";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "All Projects | Dashboard",
  description:
    "Welcome to your Project Sphere dashboard. Here you can manage your projects, track your progress, and access various tools and features to enhance your productivity and collaboration.",
};

const DashboardPage = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  const filteredProjects = user.projects.filter((project) => {
    if (!searchParams?.query) return true;
    return project.title
      .toLowerCase()
      .includes(searchParams.query.toLowerCase());
  });

  return (
    <>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1">
          <DashboardNavbar title="Projects" />
          <div className="w-full flex-1 px-4 py-4 text-sm md:px-6 md:py-6">
            <div className="flex flex-col items-start gap-4 pb-4 md:flex-row md:items-center">
              <Link
                href="/dashboard/create/project"
                className={cn(buttonVariants(), "h-7")}
              >
                New Project
              </Link>
              <SearchProject placeholder="Search Projects" />
            </div>

            <ScrollArea className="w-full">
              <menu className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </menu>

              {user.projects.length === 0 && (
                <div className="flex h-[60dvh] flex-col items-center justify-center gap-y-2 rounded-md bg-secondary/40 p-12">
                  <span className="text-base text-foreground md:text-lg">
                    No project found
                  </span>
                  <p className="max-w-md text-balance text-center text-xs text-secondary-foreground md:text-sm">
                    We couldn&apos;t find any projects associated with your
                    account.
                    <br />
                    It looks like you haven&apos;t started any projects yet. Why
                    not create your first project now?
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Link
                      className={cn(buttonVariants({ className: "w-32" }))}
                      href="dashboard/create/project"
                    >
                      Create Project
                    </Link>
                    <Link
                      href="/docs"
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          className: "w-32",
                        })
                      )}
                    >
                      Docs
                    </Link>
                  </div>
                </div>
              )}
            </ScrollArea>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
