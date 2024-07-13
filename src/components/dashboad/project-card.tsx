import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import BoringAvatar from "boring-avatars";
import { Ellipsis, Github, LockKeyhole } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-y-1.5 rounded-lg border bg-secondary/50 px-5 pb-2 pt-3 transition-all duration-100">
      <div className="flex items-center justify-between gap-x-4">
        <BoringAvatar size="32" name={project.title} />
        <div className="flex flex-1 flex-col">
          <p className="flex items-center gap-x-2 font-medium">
            {project.title}{" "}
            <LockKeyhole
              size={12}
              className="stroke-[2.5] text-secondary-foreground"
            />
          </p>
          <p className="text-secondary-foreground">asefasdfasferefgqerf</p>
        </div>
        <div>
          {/* <Ellipsis /> */}
          {project.githubUrl && (
            <a
              className="h-8 w-8 rounded-full bg-primary"
              href={project.githubUrl}
            >
              <span className="sr-only">Github</span>
              <Github className="rounded-full p-1" />
            </a>
          )}
        </div>
      </div>
      <div>
        {project.description ? (
          <span className="text-xs font-medium">{project.description}</span>
        ) : (
          <span className="text-xs text-secondary-foreground">
            No description
          </span>
        )}
      </div>
      <div>
        <span className="text-xs font-medium text-secondary-foreground">
          {formatDate(project.createdAt)}
        </span>
      </div>
      <Link
        href={`dashboard/project/${project.id}`}
        className="absolute left-0 top-0 h-full w-full"
      ></Link>
    </div>
  );
};

export default ProjectCard;
