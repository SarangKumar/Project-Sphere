import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DashboardSidebar from "@/components/dashboad/sidebar";
// import DashboardNavbar from "@/components/dashboad/navbar";
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
    canonical: `${siteConfig.url}/dashboard`,
  },
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <DashboardNavbar />
      <main className="xs:px-6 mx-auto max-w-screen-1.5xl px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

{
  /* <DashboardNavbar />
<section className="h-full rounded p-2 pt-0">
  <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border bg-background"
  >
    <ResizablePanel
      defaultSize={20}
      className="max-w-[260px min-w-[52px]"
    >
      <DashboardSidebar />
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={80} className="p-2 text-sm">
      {children}
    </ResizablePanel>
  </ResizablePanelGroup>
</section> */
}
