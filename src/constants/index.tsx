import { PricingCardProps } from "@/components/pricing/pricing-card";
import { generateColorMap } from "@/lib/utils";

export const dashboardNavbarLinks = [
  {
    name: "Projects",
    links: [
      {
        title: "My Projects",
        href: "/dashboard",
      },
      {
        title: "Create New Projects",
        href: "/dashboard/create/project",
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
      },
    ],
  },
  {
    name: "Documentation",
    links: [
      {
        title: "Guides",
        href: "/docs/guides",
      },
      {
        title: "API Reference",
        href: "/docs/api",
      },
    ],
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
    price: 299.99,
    isPopular: true,
    footerText: "Most Popular",
    pricingHeader: "Includes everything in Free, plus:",
    features: [
      {
        title: "Create up to 10 projects",
        description: "Manage a more projects with ease using our basic tools.",
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
    link: "https://buy.stripe.com/test_aEUg0K14LcTOfcI001",
  },
  {
    name: "Platinum",
    description: "Comprehensive Tools for Professionals",
    pricingHeader: "Includes everything in Gold, plus: ",
    price: 499.99,
    features: [
      {
        title: "All features from the Gold Plan",
        description: "Includes all advanced features for a complete toolkit.",
      },
      {
        title: "Create up to 30 projects",
        description:
          "Manage a more projects with ease using our advance tools.",
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
    link: "https://buy.stripe.com/test_dR69Cm8xd1b6ggM5kk",
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
    feature: {
      title: "Projects",
      description:
        "Create and manage multiple projects with ease. Organize your work and track progress within each project.",
    },
    free: {
      title: "Up to 3",
      description: "Manage a few projects with ease using our basic tools.",
    },
    gold: {
      title: "Up to 10",
      description: "Manage a more projects with ease using our modern tools.",
    },
    platinum: {
      title: "Up to 30",
      description:
        "Manage a more projects with ease using our most advance tools.",
    },
  },
  {
    feature: {
      title: "Task Management",
      description:
        "Keep track of your to-do lists, deadlines, and progress with robust task management tools. Assign, prioritize, and monitor tasks seamlessly.",
    },
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
    feature: {
      title: "AI Support",
      description:
        "Leverage advanced AI capabilities to assist with brainstorming, generating content, providing insights, and automating tasks for improved productivity.",
    },
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
    feature: {
      title: "Secure Project Sharing",
      description:
        "Share your projects securely with others via links with expiration dates, ensuring your data remains protected.",
    },
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
    feature: {
      title: "Collaboration Tools",
      description:
        "Enhance team collaboration with tools designed for seamless communication and coordination. Work together in real-time, no matter where you are.",
    },
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
    feature: {
      title: "Templates and Themes",
      description:
        "Customize your projects with a variety of templates and themes to suit your style and needs.",
    },
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
    feature: {
      title: "Analytics and Reporting",
      description:
        "Gain insights into your projects with detailed analytics. Track performance, monitor progress, and make data-driven decisions.",
    },
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
    feature: {
      title: "Workflow Customization",
      description:
        "Tailor your workflow to fit your unique needs. Customize processes, set up automation, and streamline your tasks for efficiency.",
    },
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
    feature: {
      title: "Security and Compliance",
      description:
        "Ensure your data is secure with top-notch security measures. Your information is protected with industry-standard encryption and security protocols.",
    },
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
    feature: {
      title: "Support",
      description:
        "Access dedicated support to assist you with any issues or questions. Our support team is here to help you succeed.",
    },
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
    feature: {
      title: "Onboarding Assistance",
      description:
        "Get started quickly with easy onboard access. Our intuitive interface and guided setup ensure you can start using the platform immediately.",
    },
    free: { title: "-", description: "" },
    gold: { title: "-", description: "" },
    platinum: {
      title: "Yes",
      description:
        "Get assistance with onboarding to help you get started quickly.",
    },
  },
];

export const pricingFaq = [
  {
    question: "What is included in the Free plan?",
    answer:
      "The Free plan includes basic project management features such as the ability to create up to 3 projects, basic task management, standard AI assistance, secure project sharing with limited link expiration, and basic collaboration tools.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time to access additional features and tools that better meet your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      " We accept all major credit cards. For enterprise customers, we also offer invoicing options.",
  },
];

export const BACKWARD_COLORS = generateColorMap(
  [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  "green",
  "red"
);
