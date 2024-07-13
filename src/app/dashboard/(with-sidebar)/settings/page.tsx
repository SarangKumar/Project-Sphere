import { getUserBySession } from "@/app/api/utils";
import { AvatarHoverCard } from "@/components/navbar/user-profile";
import React from "react";

const SettingsPage = async () => {
  const user = await getUserBySession({ project: false });

  if (!user) return <>No user</>;

  return (
    <div>
      <header className="flex h-12 items-center justify-between border-b px-4">
        <p className="text-sm text-secondary-foreground">Settings</p>
        <AvatarHoverCard
          name={user.name}
          email={user.email}
          image={user.image}
          size="base"
        />
      </header>
      <div className="w-full min-w-96 flex-1 px-4 py-4 text-sm">
        Settings page page.tsx
      </div>
    </div>
  );
};

export default SettingsPage;
