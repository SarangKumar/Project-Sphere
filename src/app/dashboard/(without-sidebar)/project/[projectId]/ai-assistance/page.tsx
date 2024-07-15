import React from "react";

function AiAssistancePage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return <div>Ai Assistance Page {projectId}</div>;
}

export default AiAssistancePage;
