import React from "react";
import { getUserBySession } from "../api/utils";
import DashboardSidebar from "@/components/dashboad/sidebar/dashboard-sidebar";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import ProjectCard from "@/components/dashboad/project-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import SearchProject from "@/components/dashboad/search-project";

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
        <DashboardSidebar className="" />
        <main className="flex-1">
          <DashboardNavbar title="Projects" />
          <div className="w-full min-w-96 flex-1 px-4 py-4 text-sm md:px-6 md:py-6">
            <div className="flex items-center gap-x-4 pb-4">
              <Link
                href="/dashboard/create/project"
                className={cn(buttonVariants(), "h-8")}
              >
                New Project
              </Link>
              <SearchProject placeholder="Search Projects" />
            </div>

            <menu className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </menu>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
