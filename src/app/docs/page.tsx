import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: `%s | Documentation | Project Sphere`,
    default: "Documentation | Project Sphere",
  },
  description:
    "Explore Project Sphere's documentation to learn about features, API references, and how-tos. Start using Project Sphere effectively.",
  openGraph: {
    title: "Documentation | Project Sphere",
    description:
      "Explore Project Sphere's documentation to learn about features, API references, and how-tos. Start using Project Sphere effectively.",
    url: "https://projectsphere.com/documentation",
    siteName: "Project Sphere",
    images: [
      {
        url: "https://projectsphere.com/documentation-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Project Sphere - Documentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | Project Sphere",
    description:
      "Explore Project Sphere's documentation to learn about features, API references, and how-tos. Start using Project Sphere effectively.",
    site: "@projectsphere",
    creator: "@projectsphere",
    images: [
      {
        url: "https://projectsphere.com/documentation-twitter-image.jpg",
        alt: "Project Sphere - Documentation",
      },
    ],
  },
  alternates: {
    canonical: "https://projectsphere.com/documentation",
  },
};

const DocumentationPage = () => {
  return <div>DocumentationPage</div>;
};

export default DocumentationPage;
