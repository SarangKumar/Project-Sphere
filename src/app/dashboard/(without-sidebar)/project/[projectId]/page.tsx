import { getUserBySession } from "@/app/api/utils";
import ProjectSidebar from "@/components/dashboad/project/project-sidebar";
import React from "react";

export async function generateMetadata({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  const isProjectThere = user.projects.find(
    (project) => project.id === projectId
  );

  if (!isProjectThere) return null;

  return {
    title: isProjectThere.title,
    description: isProjectThere.description || "",
    url: `/dashboard/project/${projectId}`,
  };
}

const ProjectPage = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  const isProjectThere = user.projects.find(
    (project) => project.id === projectId
  );
  console.log(!!isProjectThere);

  if (!isProjectThere) return null;
  return (
    <div className="">
      {projectId} {JSON.stringify(user, null, 1)}
    </div>
  );
};

export default ProjectPage;
