import { getUserBySession } from "@/app/api/utils";
import { Gauge } from "@/components/dashboad/guage";
import TaskStatusCard from "@/components/dashboad/project/task/task-status-card";
import Avatar from "@/components/navbar/avatar";
import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { cn, formatDate } from "@/lib/utils";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const collaboratorCount = 7;

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
    include: { tasks: true, owner: true },
  });
  if (!project) return null;

  const taskCompleted = project.tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  return (
    <div className="h-full space-y-4 p-4 text-sm md:p-6">
      <div className="project-bg relative mb-8 flex h-60 w-full flex-col justify-between overflow-hidden rounded-md border bg-cover p-2 md:p-4">
        <div className="flex-1">
          <h1 className="bg-gradient-to-r from-secondary-foreground from-[10%] to-foreground/60 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            {project.title}
          </h1>
        </div>
        <div className="flex items-end justify-between gap-x-2">
          <div className="flex items-center gap-x-1">
            <Gauge
              value={taskCompleted}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
            <Gauge
              value={2}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
            <Gauge
              value={3}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
            <Gauge
              value={4}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
            <Gauge
              value={5}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
            <Gauge
              value={6}
              max={project.tasks.length}
              size={26}
              primary="info"
            />
          </div>
          <div className="-gap-y-0.5 flex flex-col">
            <span className="text-[10px] italic leading-[10px] text-secondary-foreground md:text-xs">
              Created: {formatDate(project.createdAt)}
            </span>
            <span className="text-[10px] italic leading-[10px] text-secondary-foreground md:text-xs">
              Modified: {formatDate(project.updatedAt)}
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <h1 className="flex items-center text-xl font-semibold md:text-2xl">
          {project?.title}{" "}
          <Link
            href={`/dashboard/project/${project.id}/settings`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "ml-2"
            )}
          >
            <Edit
              className="text-secondary-foreground hover:text-foreground"
              size={16}
            />
            <span className="sr-only">Edit</span>
          </Link>
        </h1>
        <div className="flex items-center gap-x-4">
          <div className="flex -space-x-2">
            <Avatar
              name={project.owner.name}
              image={project.owner.image || ""}
              size="base"
              className="border-2 border-foreground"
            />
            <Avatar
              name={project.owner.name}
              image={project.owner.image || ""}
              size="base"
              className="border-2 border-foreground"
            />
            <Avatar
              name={project.owner.name}
              image={project.owner.image || ""}
              size="base"
              className="border-2 border-foreground"
            />
            <Avatar
              name={project.owner.name}
              image={project.owner.image || ""}
              size="base"
              className="border-2 border-foreground"
            />
          </div>
          <Link
            href={`/dashboard/project/${project.id}settings#share`}
            className={cn(
              buttonVariants({ size: "default", variant: "default" })
            )}
          >
            Invite Collaborators
          </Link>
          {/* <Link
            href={`/dashboard/project/${project.id}settings#share`}
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "hidden md:block"
            )}
          >
            Invite Collaborators
          </Link> */}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <section className="xl:col-span-2">
          <p className="text-xs sm:text-sm">{project.description}</p>
        </section>
        <section className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              Tasks ({project?.tasks.length})
            </h2>
            <Link className={cn(buttonVariants({ variant: "neon" }))} href="">
              View all
            </Link>
          </div>
          {project?.tasks
            .splice(0, 4)
            .map((task) => (
              <TaskStatusCard
                projectName={project.title}
                task={task}
                key={task.id}
              />
            ))}
          <Link
            href={`/dashboard/project/${project.id}/todo`}
            className={cn(
              buttonVariants({
                variant: "dashed",
                size: "lg",
                className: "text-xs font-normal",
              })
            )}
          >
            + Add a new Task
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
