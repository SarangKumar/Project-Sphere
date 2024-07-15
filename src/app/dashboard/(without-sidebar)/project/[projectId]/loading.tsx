import ProjectSidebar from "@/components/dashboad/project/project-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProjectLoading = () => {
  return (
    <div className="relative flex w-full">
      <aside className="sticky top-0">
        <ProjectSidebar
          projectId={"123"}
          disableLinks
          className="sticky bg-fixed"
        />
      </aside>

      <div className="h-dvh w-full">
        <header className="sticky top-0 flex h-12 items-center justify-between gap-x-2 border-b bg-background px-6 py-4 text-xs text-secondary-foreground">
          <Skeleton className="h-5 w-40" />
        </header>
        <div className="h-auto text-sm">
          <div className="mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoading;
