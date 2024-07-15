import { getUserBySession } from "@/app/api/utils";
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

  const project = user.projects.find((project) => project.id === projectId);

  if (!project) return null;

  return (
    <div className="h-full p-4 text-sm md:p-6">
      {/* <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel defaultSize={60} className="p-6">
          {project.id}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40} className="max-w-md text-xs rounded p-6">
          <ScrollArea>
          </ScrollArea>
          </ResizablePanel>
          </ResizablePanelGroup> */}

      {JSON.stringify(user.projects, null, 1)}
    </div>
  );
};

export default ProjectPage;
