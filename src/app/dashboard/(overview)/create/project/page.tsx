import { getUserBySession } from "@/app/api/utils";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";
import { CreateProject } from "@/components/dashboad/project/create-project";
import { buttonVariants } from "@/components/ui/button";
import { getSubscriptionConfig } from "@/config/subscription";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Create New Project",
  description:
    "Start a new project in Project Sphere. Set up your project details, define tasks, and begin your journey to streamlined project management and collaboration.",
};

const CreateProjectPage = async () => {
  const user = await getUserBySession({ project: true });
  if (!user) return null;

  const subscription = getSubscriptionConfig(user.subscription);
  const isProjectLimitReached =
    subscription.maxProjects <= user.projects.length;

  return (
    <div>
      <DashboardNavbar title="Create New Project" />
      <main className="flex-1 px-4 py-4 text-sm">
        {isProjectLimitReached ? (
          <ProjectLimitReached />
        ) : (
          <>
            <h1 className="mx-auto mb-4 max-w-screen-md text-lg font-semibold">
              New Project
            </h1>
            <CreateProject userId={user.id} />
          </>
        )}
      </main>
    </div>
  );
};

export default CreateProjectPage;

const ProjectLimitReached = () => {
  return (
    <div className="mx-auto max-w-screen-md">
      <h1 className="mb-4text-lg mb-4 text-lg font-semibold">
        Project Limit Reached
      </h1>
      <div className="space-y-8">
        <p className="text-sm text-secondary-foreground">
          You have reached the maximum number of projects allowed for your
          current subscription tier. To create more projects, please upgrade
          your subscription.
        </p>
        <Link
          href="/pricing"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          Upgrade Subscription
        </Link>
      </div>
    </div>
  );
};
