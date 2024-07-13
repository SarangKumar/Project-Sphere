import React from "react";
import DashboardSidebar from "@/components/dashboad/sidebar/dashboard-sidebar";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import DashboardNavbar from "@/components/dashboad/dashboard-navbar";

export const metadata: Metadata = {
  title: {
    template: `%s | Dashboard | ${siteConfig.name}`,
    default: `Dashboard | ${siteConfig.name}`,
  },
  description:
    "Explore your projects and manage them efficiently on Project Sphere's dashboard. Collaborate with your team seamlessly.",
  alternates: {
    canonical: `${siteConfig.url}/dashboard/project`,
  },
};

const DashboardProjectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      {/* <aside>Kuch</aside> */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardProjectsLayout;
