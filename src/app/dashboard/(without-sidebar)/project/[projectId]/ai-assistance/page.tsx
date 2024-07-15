import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Assistance",
  description:
    "Get help with your projects using AI assistance and enhance your productivity in Project Sphere.",
};

function AiAssistancePage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return <div>Ai Assistance Page {projectId}</div>;
}

export default AiAssistancePage;
