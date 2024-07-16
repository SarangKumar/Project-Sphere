import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import BoringAvatar from "boring-avatars";
import { ChevronRight, Github, Globe, LockKeyhole } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import MarkFavouriteButton from "./mark-favourite-button";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="relative list-none">
      <Link
        className="absolute z-10 h-1/2 w-full"
        href={`/dashboard/project/${project.id}`}
      ></Link>
      <div className="hover:red-500 group relative flex h-[184px] cursor-pointer rounded-md border bg-secondary/40 p-5 pb-4 text-left transition duration-150 ease-in-out hover:border-foreground/20 hover:bg-secondary/80">
        <div className="flex w-full flex-col gap-y-2">
          <div className="flex items-center justify-between gap-x-4">
            <BoringAvatar size="32" name={project.title} />
            <div className="flex flex-1 flex-col">
              <p className="flex items-center gap-x-2 font-medium">
                {project.title}{" "}
                {project.isPrivate && (
                  <LockKeyhole
                    size={12}
                    className="-translate-y-0.5 stroke-[2.5] text-secondary-foreground"
                  />
                )}
              </p>
              <p className="text-secondary-foreground">asefasdfasferefgqerf</p>
            </div>
            <div>
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
            <div className="flex items-center space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 border",
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
                      className: "h-8 w-8 border",
                    })
                  )}
                >
                  <span className="sr-only">Deployed Url</span>
                  <Globe className="rounded-full p-1" />
                </a>
              )}
              <MarkFavouriteButton
                projectId={project.id}
                isFavourite={project.isFavourite}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
