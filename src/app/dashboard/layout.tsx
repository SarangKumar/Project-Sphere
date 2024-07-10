import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DashboardSidebar from "@/components/dashboad/sidebar";
import DashboardNavbar from "@/components/dashboad/navbar";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

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
    <div className="flex h-dvh flex-col bg-black">
      <DashboardNavbar />
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
      </section>
    </div>
  );
};

export default DashboardLayout;
