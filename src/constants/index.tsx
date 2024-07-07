import { Folder, LayoutDashboard, Settings } from "lucide-react";

export const navLinks = [
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
