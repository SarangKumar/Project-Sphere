import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProjectSidebar from "@/components/dashboad/project/project-sidebar";
import { getUserBySession } from "@/app/api/utils";
import ProjectHeader from "@/components/dashboad/project/project-header";

export const metadata: Metadata = {
  title: {
    template: `%s | Dashboard | ${siteConfig.name}`,
    default: `Dashboard | ${siteConfig.name}`,
  },
  description:
    "Explore your projects and manage them efficiently on Project Sphere's dashboard. Collaborate with your team seamlessly.",
  alternates: {
    canonical: `${siteConfig.url}/dashboard/project`,
  },
};

const DashboardProjectsLayout = async ({
  children,
  params: { projectId },
}: Readonly<{
  children: React.ReactNode;
  params: { projectId: string };
}>) => {
  const user = await getUserBySession({ project: true });

  if (!user) return <>User not found</>;
  const currentProject = user.projects.find(
    (project) => project.id === projectId
  );

  if (!currentProject) return <>No project available</>;

  return (
    <div className="relative flex w-full">
      <aside className="sticky top-0">
        <ProjectSidebar projectId={projectId} className="sticky bg-fixed" />
      </aside>

      <div className="h-dvh w-full">
        <ProjectHeader project={currentProject} />
        <div className="h-auto text-sm">{children}</div>
      </div>
    </div>
  );
};

export default DashboardProjectsLayout;
