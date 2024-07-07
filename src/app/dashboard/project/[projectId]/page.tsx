import React from "react";

const ProjectPage = ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  return <div>ProjectPage {projectId}</div>;
};

export default ProjectPage;
