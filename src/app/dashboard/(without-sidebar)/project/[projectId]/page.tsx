import { getUserBySession } from "@/app/api/utils";
import TaskStatusCard from "@/components/dashboad/project/task/task-status-card";
import prisma from "@/lib/prisma";
import React from "react";

export async function generateMetadata({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const user = await getUserBySession({ project: true });

  if (!user) return null;

  const project = user.projects.find((project) => project.id === projectId);

  if (!project) return null;

  return {
    title: project.title,
    description: project.description || "",
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

  const projectExists = user.projects.find(
    (project) => project.id === projectId
  );
  if (!projectExists) return null;

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: { tasks: true },
  });

  return (
    <div className="h-full p-4 text-sm md:p-6">
      {/* {JSON.stringify(user.projects, null, 1)} */}
      <div className=""></div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <section className="xl:col-span-2">{project?.title}</section>
        <section className="grid grid-cols-1 gap-4">
          {/* {JSON.stringify(project?.tasks)} */}
          {project?.tasks.map((task) => (
            <TaskStatusCard
              projectName={project.title}
              task={task}
              key={task.id}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
