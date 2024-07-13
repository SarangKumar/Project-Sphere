import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import BoringAvatar from "boring-avatars";
import {
  ChevronRight,
  Ellipsis,
  Github,
  Globe,
  LockKeyhole,
} from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="list-none">
      <div className="group relative flex h-[184px] cursor-pointer rounded-md border bg-secondary/40 p-5 pb-4 text-left transition duration-150 ease-in-out hover:border-foreground/20 hover:bg-secondary/80">
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
              <span className="line-clamp-4 text-xs text-secondary-foreground">
                {project.description}
              </span>
            ) : (
              <span className="text-xs text-secondary-foreground">
                No description
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-secondary-foreground">
              {formatDate(project.createdAt)}
            </span>
            <div className="space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "border",
                    })
                  )}
                >
                  <span className="sr-only">Github</span>
                  <Github className="rounded-full p-1" />
                </a>
              )}
              {project.deployedUrl && (
                <a
                  href={project.deployedUrl}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "border",
                    })
                  )}
                >
                  <span className="sr-only">Deployed Url</span>
                  <Globe className="rounded-full p-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
