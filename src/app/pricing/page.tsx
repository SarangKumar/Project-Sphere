import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Faq from "@/components/pricing/faq";
import PricingCard from "@/components/pricing/pricing-card";
import {
  PricingTablePlanLg,
  PricingTablePlanSm,
} from "@/components/pricing/pricing-table";
import { siteConfig } from "@/config/site";
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
            Pricing Plans
          </h1>
          <p className="max-w-screen-md text-balance text-center text-base text-secondary-foreground md:text-lg">
            Find the Perfect Plan for Your Needs
          </p>
        </header>

        <main className="grid grid-cols-1 place-content-around items-stretch gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </main>

        <div className="my-16 flex flex-col items-center justify-center space-y-2">
          <h2 className="text-balance text-2xl font-medium md:text-3xl">
            Find the Perfect Plan for Your Needs
          </h2>
          <p className="max-w-screen-md text-balance text-center text-base text-secondary-foreground md:text-lg">
            We offer flexible pricing plans to fit every team&apos;s needs.
            Whether you&apos;re just starting or scaling up, {siteConfig.name}{" "}
            has the perfect plan for you.
          </p>
        </div>

        <PricingTablePlanLg />
        <PricingTablePlanSm />
      </div>

      <div className="my-16 flex w-full max-w-screen-xl flex-col items-center justify-center space-y-2 lg:mx-auto">
        <Faq />
      </div>

      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Whether you&apos;re a small team just getting started or an enterprise
          looking for advanced project management solutions, Project Sphere has
          the right plan for you. Sign up today and take your project management
          to the next level.
        </p>
        <a href="/signup" className="cta-button">
          Sign Up Now
        </a>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;
