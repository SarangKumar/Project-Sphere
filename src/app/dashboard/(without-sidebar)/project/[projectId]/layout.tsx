import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProjectSidebar from "@/components/dashboad/project/project-sidebar";
import { getUserBySession } from "@/app/api/utils";

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
  const user = await getUserBySession({ project: false });

  if (!user) return <>User not found</>;
  return (
    <div className="flex">
      <aside className="sticky top-0">
        <ProjectSidebar projectId={projectId} />
      </aside>

      <div className="h-dvh w-full overflow-y-auto">
        <nav className="sticky top-0 h-12 border-b bg-background px-6 py-4 text-xs text-secondary-foreground">
          {user.name}
        </nav>
        <main className="p-6 text-sm md:px-6">
          {/* {projectId} {JSON.stringify(user, null, 1)} */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardProjectsLayout;
