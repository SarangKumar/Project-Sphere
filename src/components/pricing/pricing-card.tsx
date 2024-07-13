import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { pricingPlans } from "@/constants";
import { Check } from "lucide-react";
import { getServerSession } from "next-auth";

export interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  features: {
    title: string;
    description?: string;
  }[];
  isPopular?: boolean;
  link: string;
  footerText?: string;
  pricingHeader?: string;
}

const PricingCard = async ({
  price,
  features,
  name,
  description,
  footerText,
  pricingHeader,
  link,
  isPopular,
}: PricingCardProps) => {
  const session = await getServerSession();
  const isSignedIn = !!session?.user;

  return (
    <div
      className={cn(
        "mx-auto flex max-w-md flex-col gap-y-2 rounded-lg border bg-secondary/50 px-6 pb-8 pt-4 md:px-8",
        isPopular && "border-2 border-primary"
      )}
    >
      <h2
        className={cn(
          GeistMono.className,
          isPopular && "inline-flex items-center",
          "text-xl font-bold uppercase"
        )}
      >
        {name}
        {isPopular && (
          <span
            className={cn(
              buttonVariants({ variant: "default" }),
              "my-2 ml-2 inline-flex border-none px-2 py-0.5 font-sans text-xs"
            )}
          >
            Most Popular
          </span>
        )}
      </h2>
      <p className="text-sm font-medium text-secondary-foreground">
        {description}
      </p>
      <a
        href={isSignedIn ? link : "/"}
        className={cn(buttonVariants({ size: "lg" }))}
      >
        Get Started
      </a>
      <p className="my-2 text-xxs text-secondary-foreground">
        <span className={cn(GeistMono.className, "text-3xl text-foreground")}>
          ₹{price}
        </span>{" "}
        / month
      </p>

      <div className="border-t py-6 text-secondary-foreground">
        <p className="text-xxs">{pricingHeader}</p>

        <div className="space-y-4 py-4">
          {features.map(({ title, description }) => (
            <div className="flex items-start gap-x-2" key={title}>
              <Check size={16} className="stroke-primary stroke-[2]" />
              <div className="flex flex-1 flex-col">
                <p className="text-xxs text-foreground">{title}</p>
                <p className="text-xxs text-secondary-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs font-medium text-secondary-foreground">
        {footerText}
      </p>
    </div>
  );
};

export default PricingCard;
