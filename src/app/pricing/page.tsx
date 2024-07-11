import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import PricingCard from "@/components/pricing/pricing-card";
import {
  PricingTablePlanLg,
  PricingTablePlanSm,
} from "@/components/pricing/pricing-table";
import { pricingPlans } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing & Fees",
  description:
    "We offer flexible pricing plans to fit every team's needs. Whether you're just starting or scaling up, Project Sphere has the perfect plan for you.",
};

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <div
        className={cn(
          "sm:py-18 relative mx-auto max-w-screen-1.5xl overflow-hidden px-6 py-16 pt-8 md:py-24 md:pt-16 lg:py-24"
        )}
      >
        <header className="mb-16 mt-8 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-balance text-2xl font-medium md:text-3xl">
            Find the Perfect Plan for Your Needs
          </h1>
          <p className="max-w-screen-md text-balance text-center text-base text-secondary-foreground md:text-lg">
            We offer flexible pricing plans to fit every team&apos;s needs.
            Whether you&apos;re just starting or scaling up, Project Sphere has
            the perfect plan for you.
          </p>
        </header>

        <main className="grid grid-cols-1 place-content-around items-stretch gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </main>

        <PricingTablePlanLg />
        <PricingTablePlanSm />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
