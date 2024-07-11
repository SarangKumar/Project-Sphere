import { siteConfig } from "../config/site";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  // Get all pages
  //   const teams = await prisma.team.findMany();
  //   const teamUrls =
  //     teams.map((team) => {
  //       return {
  //         url: `${baseUrl}/team/${team.teamId}`,
  //         lastModified: new Date(),
  //       };
  //     }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/auth/sign-in`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/auth/sign-up`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
    },
  ];
}
