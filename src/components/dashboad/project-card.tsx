import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import BoringAvatar from "boring-avatars";
import { ChevronRight, Ellipsis, Github, LockKeyhole } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="list-none">
      <div className="group relative flex h-44 cursor-pointer rounded-md border bg-secondary/50 p-5 text-left transition duration-150 ease-in-out hover:border-foreground/20 hover:bg-secondary/80">
        <div className="flex w-full flex-col gap-y-2">
          <div className="flex items-center justify-between gap-x-4">
            <BoringAvatar size="32" name={project.title} />
            <div className="flex flex-1 flex-col">
              <p className="flex items-center gap-x-2 font-medium">
                {project.title}{" "}
                {project.isPrivate && (
                  <LockKeyhole
                    size={12}
                    className="stroke-[2.5] text-secondary-foreground"
                  />
                )}
              </p>
              <p className="text-secondary-foreground">asefasdfasferefgqerf</p>
            </div>
            <div>
              {/* {project.githubUrl && (
                <a
                  className="h-8 w-8 rounded-full bg-primary"
                  href={project.githubUrl}
                >
                  <span className="sr-only">Github</span>
                  <Github className="rounded-full p-1" />
                </a>
              )} */}
              <ChevronRight
                size={14}
                className="text-secondary-foreground transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>

          <div className="flex-1">
            {project.description ? (
              <span className="line-clamp-4 text-xs font-medium">
                {project.description}
              </span>
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
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
