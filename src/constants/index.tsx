import { PricingCardProps } from "@/components/pricing/pricing-card";
// import { PricingTablePlanProps } from "@/components/pricing/pricing-table";
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
    title: "Pricing",
    href: "/pricing",
  },
];

export const pricingPlans: PricingCardProps[] = [
  {
    name: "Free",
    description: "Essential Tools for Starters",
    price: 0,
    features: [
      {
        title: "Create up to 3 projects",
        description: "Manage a few projects with ease using our basic tools.",
      },
      {
        title: "Basic task management features",
        description: "Track tasks with simple, effective tools.",
      },
      {
        title: "Standard AI support",
        description: "Receive AI assistance for standard project tasks.",
      },
      {
        title: "Secure sharing with short-term links",
        description:
          "Share your projects securely with links that expire after a short duration.",
      },
      {
        title: "Fundamental collaboration tools",
        description: "Collaborate with team members using basic tools.",
      },
    ],
    link: "/",
  },
  {
    name: "Gold",
    description: "Advanced Features for Growing Teams",
    price: 19.99,
    isPopular: true,
    footerText: "Most Popular",
    pricingHeader: "Includes everything in Free, plus:",
    features: [
      {
        title: "Unlimited project creation",
        description: "Create and manage as many projects as you need.",
      },
      {
        title: "Priority-based task management",
        description: "Set priorities and manage tasks efficiently.",
      },
      {
        title: "Enhanced AI support with contextual responses",
        description: "Get more accurate and context-aware AI assistance.",
      },
      {
        title: "Secure sharing with customizable link expiration",
        description: "Control the duration and access of your shared links.",
      },
      {
        title: "Enhanced collaboration tools with role-based access",
        description:
          "Collaborate effectively with advanced tools and role-specific access controls.",
      },
      {
        title: "Access to premium templates and themes",
        description: "Use exclusive templates and themes for your projects.",
      },
    ],
    link: "/",
  },
  {
    name: "Platinum",
    description: "Comprehensive Tools for Professionals",
    pricingHeader: "Includes everything in Gold, plus: ",
    price: 49.99,
    features: [
      {
        title: "All features from the Gold Plan",
        description: "Includes all advanced features for a complete toolkit.",
      },
      {
        title: "Priority support and onboarding assistance",
        description: "Get top-tier support and help getting started.",
      },
      {
        title:
          "Premium AI support with advanced model for better chat responses",
        description:
          "Utilize our most advanced AI model for superior assistance.",
      },
      {
        title: "Advanced analytics and reporting",
        description: "Gain insights with detailed analytics and reports.",
      },
      {
        title: "Customizable workflows and integrations",
        description:
          "Tailor workflows and integrate with other tools seamlessly.",
      },
      {
        title: "Enterprise-grade security and compliance",
        description:
          "Ensure your projects are secure with top-level security features.",
      },
      {
        title: "Dedicated account manager",
        description:
          "Receive personalized assistance from a dedicated account manager.",
      },
    ],
    link: "/",
  },
];
export interface PricingFeature {
  feature: { title: string; description: string };
  free: { title: string; description: string };
  gold: { title: string; description: string };
  platinum: { title: string; description: string };
}

export const pricingFeatures: PricingFeature[] = [
  {
    feature: { title: "Projects", description: "Projects" },
    free: {
      title: "Up to 3",
      description: "Manage a few projects with ease using our basic tools.",
    },
    gold: {
      title: "Unlimited",
      description: "Create and manage as many projects as you need.",
    },
    platinum: {
      title: "Unlimited",
      description:
        "Create and manage as many projects as you need with advanced features.",
    },
  },
  {
    feature: { title: "Task Management", description: "" },
    free: {
      title: "Basic",
      description: "Track tasks with simple, effective tools.",
    },
    gold: {
      title: "Priority-based",
      description: "Set priorities and manage tasks efficiently.",
    },
    platinum: {
      title: "Priority-based",
      description: "Advanced task management with additional features.",
    },
  },
  {
    feature: { title: "AI Support", description: "" },
    free: {
      title: "Standard",
      description: "Receive AI assistance for standard project tasks.",
    },
    gold: {
      title: "Enhanced",
      description: "Get more accurate and context-aware AI assistance.",
    },
    platinum: {
      title: "Premium",
      description:
        "Utilize our most advanced AI model for superior assistance.",
    },
  },
  {
    feature: { title: "Secure Project Sharing", description: "" },
    free: {
      title: "Limited link expiration",
      description:
        "Share your projects securely with links that expire after a short duration.",
    },
    gold: {
      title: "Customizable link expiration",
      description: "Control the duration and access of your shared links.",
    },
    platinum: {
      title: "Customizable link expiration",
      description:
        "Advanced sharing options with full control over link access.",
    },
  },
  {
    feature: { title: "Collaboration Tools", description: "" },
    free: {
      title: "Basic",
      description: "Collaborate with team members using basic tools.",
    },
    gold: {
      title: "Enhanced",
      description:
        "Collaborate effectively with advanced tools and role-specific access controls.",
    },
    platinum: {
      title: "Enhanced",
      description: "Advanced collaboration tools with additional features.",
    },
  },
  {
    feature: { title: "Templates and Themes", description: "" },
    free: { title: "-", description: "" },
    gold: {
      title: "Premium",
      description: "Use exclusive templates and themes for your projects.",
    },
    platinum: {
      title: "Premium",
      description:
        "Access to the most premium and customizable templates and themes.",
    },
  },
  {
    feature: { title: "Analytics and Reporting", description: "" },
    free: { title: "-", description: "" },
    gold: {
      title: "Basic",
      description:
        "Get basic insights with essential analytics and reporting tools.",
    },
    platinum: {
      title: "Advanced",
      description: "Gain deep insights with advanced analytics and reports.",
    },
  },
  {
    feature: { title: "Workflow Customization", description: "" },
    free: { title: "-", description: "" },
    gold: {
      title: "Basic",
      description: "Tailor basic workflows to your needs.",
    },
    platinum: {
      title: "Advanced",
      description: "Fully customizable workflows and integrations.",
    },
  },
  {
    feature: { title: "Security and Compliance", description: "" },
    free: {
      title: "Standard",
      description:
        "Ensure your projects are secure with basic security features.",
    },
    gold: {
      title: "Advanced",
      description: "Enhanced security measures for added protection.",
    },
    platinum: {
      title: "Enterprise-grade",
      description:
        "Top-level security and compliance features for enterprises.",
    },
  },
  {
    feature: { title: "Dedicated Account Manager", description: "" },
    free: { title: "-", description: "" },
    gold: { title: "-", description: "" },
    platinum: {
      title: "Yes",
      description:
        "Receive personalized assistance from a dedicated account manager.",
    },
  },
  {
    feature: { title: "Support", description: "" },
    free: {
      title: "Community",
      description: "Get help from the community support forum.",
    },
    gold: {
      title: "Priority",
      description: "Receive priority support from our team.",
    },
    platinum: {
      title: "Priority",
      description: "Top-priority support for all your needs.",
    },
  },
  {
    feature: { title: "Onboarding Assistance", description: "" },
    free: { title: "-", description: "" },
    gold: { title: "-", description: "" },
    platinum: {
      title: "Yes",
      description:
        "Get assistance with onboarding to help you get started quickly.",
    },
  },
];
