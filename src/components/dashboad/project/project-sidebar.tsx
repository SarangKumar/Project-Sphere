import { projectSidebarLinks } from "@/constants";
import React from "react";
import ProjectNavLinks from "./project-nav-links";
import Logo from "@/components/logo";
import SidebarStatus from "../sidebar/sidebar-status";

const ProjectSidebar = ({ projectId }: { projectId: string }) => {
  return (
    <div className="flex h-dvh w-14 flex-col justify-between border-r bg-background p-2 transition-all duration-300 hover:w-56">
      <div>
        <Logo className="size-10" />
        {projectSidebarLinks.map((sidebartheme) => (
          <menu
            key={sidebartheme.name}
            className="flex flex-col gap-y-1 border-b py-2"
          >
            {sidebartheme.links.map((link) => (
              <ProjectNavLinks
                key={link.title}
                href={link.href}
                projectId={projectId}
                title={link.title}
                icon={link.icon}
              />
            ))}
          </menu>
        ))}
      </div>
      <SidebarStatus className="border-t-0 px-0.5 py-2" />
    </div>
  );
};

export default ProjectSidebar;
