import { getUserBySession } from "@/app/api/utils";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Manage your account settings, subscription details, and preferences. Customize your experience and ensure your projects are secure and well-organized.",
};

const SettingsPage = async () => {
  const user = await getUserBySession({ project: false });

  if (!user) return <>No user</>;

  return (
    <div>
      <DashboardNavbar title="Settings" />
      <div className="w-full min-w-96 flex-1 px-4 py-4 text-sm">
        Settings page page.tsx
      </div>
    </div>
  );
};

export default SettingsPage;
