import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create New Project",
  description:
    "Start a new project in Project Sphere. Set up your project details, define tasks, and begin your journey to streamlined project management and collaboration.",
};

const CreateProjectPage = () => {
  return (
    <div>
      <DashboardNavbar title="Create New Project" />
      <main className="w-full min-w-96 flex-1 px-4 py-4 text-sm">
        Create new project page.tsx
      </main>
    </div>
  );
};

export default CreateProjectPage;
