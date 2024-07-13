import React from "react";
import { getUserBySession } from "../api/utils";
import DashboardSidebar from "@/components/dashboad/sidebar/dashboard-sidebar";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import ProjectCard from "@/components/dashboad/project-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DashboardPage = async () => {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  return (
    <>
      <div className="flex">
        <DashboardSidebar className="" />
        <main className="flex-1">
          <DashboardNavbar title="Projects" />
          <div className="w-full min-w-96 flex-1 px-4 py-4 text-sm md:px-6">
            <div className="pb-4">
              <Link href="/dashboard/project" className={cn(buttonVariants())}>
                New Project
              </Link>
            </div>

            <menu className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {user.projects.map((project) => (
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
