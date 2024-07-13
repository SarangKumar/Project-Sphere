import { getUserBySession } from "@/app/api/utils";
import React from "react";

const SidebarStatus = async () => {
  const user = await getUserBySession({ project: false });
  if (!user) return null;
  return (
    <div className="flex flex-col space-y-1 border-t px-6 py-4 text-sm">
      <span className="truncate">{user.name}</span>
      <span className="truncate text-xs text-secondary-foreground">
        {user.email}
      </span>
    </div>
  );
};

export default SidebarStatus;
