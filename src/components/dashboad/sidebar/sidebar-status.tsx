import { getUserBySession } from "@/app/api/utils";
import React from "react";
import { Gauge } from "../guage";

const SidebarStatus = async () => {
  const user = await getUserBySession({ project: true });
  if (!user) return null;
  return (
    <div className="px--4 flex items-center justify-start gap-x-2 space-y-1 border-t py-4 text-sm md:px-6">
      <Gauge
        className=""
        value={user.projects.length}
        max={25}
        reverse={false}
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
