import DangerZone from "@/components/dashboad/project/settings/danger-zone";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Manage your account settings, preferences, and configurations in Project Sphere.",
};
const SettingsPage = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project) return <div>Project not found</div>;

  return (
    <div className="">
      <h2 className="border-b p-4 md:p-6">Settings {projectId}</h2>
      <DangerZone project={project} />
      {/* {process.env.NODE_ENV !== "production" && (
        <div>{JSON.stringify(project)}</div>
      )} */}
    </div>
  );
};

export default SettingsPage;
