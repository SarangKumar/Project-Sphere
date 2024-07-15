import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { Gauge } from "../guage";
import { BACKWARD_COLORS } from "@/constants";
import { getSubscriptionConfig } from "@/config/subscription";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const SidebarStatus = async ({ className }: { className?: string }) => {
  const user = await getUserBySession({ project: true });
  if (!user) return null;

  const projectCount = user.projects.length;
  const projectLimit = getSubscriptionConfig(user.subscription).maxProjects;

  return (
    <div
      className={cn(
        "relative flex items-center justify-start gap-x-2 space-y-1 text-sm @container",
        className
      )}
    >
      <Gauge
        className="shrink-0"
        value={projectCount}
        max={projectLimit}
        primary={BACKWARD_COLORS}
        size="36px"
      />

      <div
        className={cn(
          "hidden h-full flex-1 -translate-x-1 flex-col items-start opacity-0 transition-all duration-700 @[3rem]:flex @[3rem]:translate-x-0 @[3rem]:opacity-100",
          "project-link"
        )}
      >
        <span className="w-full truncate whitespace-nowrap text-xs md:text-sm">
          {user.name} {user.subscription}
        </span>
        <span className="line-clamp-1 truncate whitespace-nowrap text-xs text-secondary-foreground">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default SidebarStatus;
