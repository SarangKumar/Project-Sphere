import React from "react";
import { getUserBySession } from "../api/utils";
import ProjectCard from "@/components/dashboad/project-card";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";

const DashboardPage = async () => {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  return (
    <>
      <DashboardNavbar />
      <div className="xs:px-6 mx-auto max-w-screen-1.5xl px-4 py-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {user.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
