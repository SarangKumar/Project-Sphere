import { Plans, pricingFeatures, pricingPlans } from "@/constants";
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

export const PricingTablePlanLg = () => {
  return (
    <table className="mb-16 mt-24 hidden table-auto lg:block">
      <thead className="">
        <tr className="">
          <th className="invisible"></th>
          {pricingPlans.map((plan) => (
            <TableHead key={plan.name} {...plan} className="" />
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
              title={feature.free.title}
              description={feature.free.description}
            />
            <TableTd
              title={feature.gold.title}
              description={feature.gold.description}
            />
            <TableTd
              title={feature.platinum.title}
              description={feature.platinum.description}
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
      <PricingTablePlansCol plan="free" />
      <PricingTablePlansCol plan="gold" />
      <PricingTablePlansCol plan="platinum" />
    </div>
  );
};
export const PricingTablePlansCol = ({ plan }: { plan: Plans }) => {
  const selectedPlan = pricingPlans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase()
  );

  if (selectedPlan) {
    return (
      <table className="">
        <thead>
          <tr>
            <TableHead {...selectedPlan} colSpan={2} className="w-full" />
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
    <td className="flex items-center gap-x-2 p-4">
      <span className="text-sm">{title}</span>
      {description && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="text-secondary-foreground" size={14} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </td>
  );
};

export const TableHead = ({
  name,
  price,
  isPopular,
  colSpan,
  link,
  className,
}: PricingCardProps & { colSpan?: number; className?: string }) => {
  return (
    <th
      colSpan={colSpan}
      className={cn("gap-y-1 bg-local p-4 text-left", className)}
    >
      <h3
        className={cn(
          GeistMono.className,
          "flex flex-col items-center gap-2 md:flex-row"
        )}
      >
        <span className="text-lg font-semibold uppercase">{name}</span>
        <p className="my-2 text-sm text-secondary-foreground">
          <span className={cn(GeistMono.className, "text-lg")}>${price}</span>/
          month
        </p>
      </h3>
      <Link
        href={link}
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
        <CircleMinus className="text-secondary-foreground/80" size={16} />
      </td>
    );
  } else if (title.toLowerCase() === "yes") {
    return (
      <td className="p-4">
        <CircleCheck className="text-primary" size={16} />
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
