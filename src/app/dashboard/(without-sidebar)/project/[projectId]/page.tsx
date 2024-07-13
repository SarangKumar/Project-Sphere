import { getUserBySession } from "@/app/api/utils";
import React from "react";

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
    <div className="text-sm">
      ProjectPage {projectId} {JSON.stringify(user)}
    </div>
  );
};

export default ProjectPage;
