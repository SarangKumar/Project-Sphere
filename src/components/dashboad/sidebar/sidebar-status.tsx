import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { Gauge } from "../guage";
import { BACKWARD_COLORS } from "@/constants";
import { getSubscriptionConfig } from "@/config/subscription";

const SidebarStatus = async () => {
  const user = await getUserBySession({ project: true });
  if (!user) return null;

  const projectCount = user.projects.length;
  const projectLimit = getSubscriptionConfig(user.subscription).maxProjects;

  return (
    <div className="flex items-center justify-start gap-x-2 space-y-1 border-t px-4 py-4 text-sm md:px-6">
      <Gauge
        className=""
        value={projectCount}
        max={projectLimit}
        primary={BACKWARD_COLORS}
        size="35px"
      />

      <div className="flex flex-1 -translate-y-1 flex-col">
        <span className="truncate text-xs md:text-sm">{user.name}</span>
        <span className="line-clamp-1 truncate text-xs text-secondary-foreground">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default SidebarStatus;
