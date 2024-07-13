import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { Gauge } from "../guage";
import { generateColorMap, interpolateColor } from "@/lib/utils";
import { BACKWARD_COLORS } from "@/constants";

const SidebarStatus = async () => {
  const user = await getUserBySession({ project: true });
  if (!user) return null;

  const projectCount = user.projects.length;
  const projectLimit = 8;

  const colorMap = generateColorMap(
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    "green",
    "red"
  );

  return (
    <div className="flex items-center justify-start gap-x-2 space-y-1 border-t px-4 py-4 text-sm md:px-6">
      <Gauge
        className=""
        value={projectCount}
        max={projectLimit}
        primary={colorMap}
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
