import { pricingFeatures, pricingPlans } from "@/constants";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleCheck, CircleMinus, Info } from "lucide-react";
import { PricingCardProps } from "./pricing-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { GeistMono } from "geist/font/mono";
import { getServerSession } from "next-auth";
import { SUBSCRIPTION_TIER } from "@/config/subscription";

export const PricingTablePlanLg = () => {
  return (
    <table className="mb-16 mt-24 hidden table-auto lg:block">
      <thead className="">
        <tr className="relative">
          <th className="invisible"></th>
          {pricingPlans.map((plan) => (
            <TableHead
              key={plan.name}
              {...plan}
              className="sticky left-0 top-0"
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {pricingFeatures.map((feature, index) => (
          <tr key={index} className="border-t">
            <TableTd
              head
              title={feature.feature.title}
              description={feature.feature.description}
            />
            <TableTd
              title={feature.FREE.title}
              description={feature.FREE.description}
            />
            <TableTd
              title={feature.GOLD.title}
              description={feature.GOLD.description}
            />
            <TableTd
              title={feature.PLATINUM.title}
              description={feature.PLATINUM.description}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const PricingTablePlanSm = () => {
  return (
    <div className="mx-auto mb-16 mt-24 max-w-screen-md space-y-12 lg:hidden">
      <PricingTablePlansCol plan="FREE" />
      <PricingTablePlansCol plan="GOLD" />
      <PricingTablePlansCol plan="PLATINUM" />
    </div>
  );
};
export const PricingTablePlansCol = ({ plan }: { plan: SUBSCRIPTION_TIER }) => {
  const selectedPlan = pricingPlans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase()
  );

  if (selectedPlan) {
    return (
      <table className="">
        <thead>
          <tr className="relative">
            <TableHead
              {...selectedPlan}
              colSpan={2}
              className="sticky top-0 w-full"
            />
          </tr>
        </thead>
        <tbody>
          {pricingFeatures.map((feature, index) => (
            <tr key={index} className="border-t">
              <TableTd
                head
                title={feature.feature.title}
                description={feature.feature.description}
              />
              <TableTd
                title={feature[plan].title}
                description={feature[plan].description}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <>Plan not found</>;
  }
};

const TableRowTooTip = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <td className="px-4 lg:whitespace-nowrap lg:pr-12">
      <span className="xs:text-sm text-xs">{title}</span>
      {description && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Info
              className="ml-2 inline shrink-0 text-secondary-foreground"
              size={14}
            />
          </TooltipTrigger>
          <TooltipContent className="">
            <p className="">{title}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </td>
  );
};

export const TableHead = async ({
  name,
  price,
  isPopular,
  colSpan,
  link,
  className,
}: PricingCardProps & { colSpan?: number; className?: string }) => {
  const session = await getServerSession();
  const isSignedIn = !!session?.user;

  return (
    <th
      colSpan={colSpan}
      className={cn("sticky top-0 gap-y-1 p-4 text-left", className)}
    >
      <h3
        className={cn(GeistMono.className, "flex flex-row items-center gap-2")}
      >
        <span className="text-xl font-semibold uppercase">{name}</span>
        <p className="my-2 text-sm text-secondary-foreground">
          <span className={cn(GeistMono.className, "text-lg")}>₹{price}</span>/
          month
        </p>
      </h3>
      <Link
        href={isSignedIn ? link : "/"}
        className={cn(buttonVariants({ size: "lg" }), "w-full py-1.5")}
      >
        Get Started
      </Link>
    </th>
  );
};

export const TableTd = ({
  title,
  description,
  head,
}: {
  title: string;
  description: string;
  head?: boolean;
}) => {
  if (head) {
    return <TableRowTooTip title={title} description={description} />;
  } else if (title === "-") {
    return (
      <td className="p-4">
        <CircleMinus
          className="shrink-0 text-secondary-foreground/80"
          size={16}
        />
      </td>
    );
  } else if (title.toLowerCase() === "yes") {
    return (
      <td className="p-4">
        <CircleCheck className="shrink-0 text-primary" size={16} />
      </td>
    );
  } else {
    return (
      <td className="p-4">
        <strong className="block text-xs font-medium text-foreground md:text-sm">
          {title}
        </strong>
        {description && (
          <span className="text-xs leading-[4px] text-secondary-foreground md:text-sm">
            {description}
          </span>
        )}
      </td>
    );
  }
};
