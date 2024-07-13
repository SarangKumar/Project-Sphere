import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";
import { parseISO, format, formatDistanceToNow } from "date-fns";
import chroma from "chroma-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function greeting(name: string) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  console.log(currentHour);

  if (currentHour < 12) {
    console.log(`Good morning, ${name}!`);
  } else if (currentHour < 18) {
    console.log(`Good afternoon, ${name}!`);
  } else {
    console.log(`Good evening, ${name}!`);
  }
}

export function saltAndHashPassword(password: any) {
  const saltRounds = 10; // Adjust the cost factor according to your security requirements
  const salt = bcrypt.genSaltSync(saltRounds); // Synchronously generate a salt
  const hash = bcrypt.hashSync(password, salt); // Synchronously hash the password
  return hash; // Return the hash directly as a string
}

export function getInitials(name: string) {
  const words = name.split(" ");

  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }

  return (words[0][0] + words[1][0]).toUpperCase();
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true });
}

export const interpolateColor = (
  percent: number,
  startColor: string,
  endColor: string
): string => {
  const scale = chroma.scale([startColor, endColor]);
  return scale(percent / 100).hex();
};

export const generateColorMap = (
  percentages: number[],
  startColor: string,
  endColor: string
): { [key: number]: string } => {
  return percentages.reduce(
    (acc, percent) => {
      acc[percent] = interpolateColor(percent, startColor, endColor);
      return acc;
    },
    {} as { [key: number]: string }
  );
};
