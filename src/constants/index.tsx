import { Folder, LayoutDashboard, Settings } from "lucide-react";

export const dashboardSidebarLinks = [
  {
    title: "Dashboard",
    icon: (
      <LayoutDashboard size={24} className="size-5 shrink-0 @[60px]:size-5" />
    ),
    href: "/dashboard",
  },
  {
    title: "Projects",
    icon: <Folder size={24} className="size-5 shrink-0 @[60px]:size-5" />,
    href: "/dashboard/project",
  },
  {
    title: "Settings",
    icon: <Settings size={24} className="size-5 shrink-0 @[60px]:size-5" />,
    href: "/dashboard/settings",
  },
];

export const navLinks = [
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Projects",
    href: "/dashboard/project",
  },
  // {
  //   title: "Settings",
  //   href: "/dashboard/settings",
  // },
];
