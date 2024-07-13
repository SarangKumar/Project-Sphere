import { PrismaClient } from "@prisma/client";
import chalk from "chalk";
import usersData from "./user.json" assert { type: "json" };
import projectsData from "./project.json" assert { type: "json" };
import tasksData from "./task.json" assert { type: "json" };

const prisma = new PrismaClient();

const load = async () => {
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    console.log(chalk.red.bold("Can't run seed in production"));
    process.exit(1);
  } else {
    try {
      await prisma.project.deleteMany();
      console.log("✓" + " [1/4] " + chalk.red("Deleted project records"));

      await prisma.user.deleteMany();
      console.log("✓" + " [2/4] " + chalk.red("Deleted user records"));

      await prisma.task.deleteMany();
      console.log("✓" + " [2/4] " + chalk.red("Deleted task records"));

      await prisma.user.createMany({ data: usersData });
      console.log("✓" + " [3/4] " + chalk.green("Added new user data"));

      await prisma.project.createMany({ data: projectsData });
      console.log("✓" + " [4/4] " + chalk.green("Added new project data"));

      await prisma.task.createMany({ data: tasksData });
      console.log("✓" + " [4/4] " + chalk.green("Added new task data"));

      console.log(chalk.yellow("\n✨✨ Seeded data successfully"));
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  }
};

load();
