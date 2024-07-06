import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
