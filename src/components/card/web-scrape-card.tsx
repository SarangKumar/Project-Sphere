import { cn } from "@/lib/utils";
import { Globe2 } from "lucide-react";
import React from "react";
import FeatureListItem from "./feature-list-item";

const WebScrapeCard = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "card",
        "group/card grid grid-cols-1 gap-4 @container/card",
        className
      )}
    >
      <div className="flex flex-row justify-between @sm/card:justify-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="grid size-10 place-items-center rounded bg-background">
              <Globe2 className="stroke-primary stroke-[1.8]" />
            </span>
            <h3 className="text-center text-lg font-medium text-foreground lg:text-left">
              Reference Integration
            </h3>
            <p className="text-balance text-center text-sm text-secondary-foreground lg:text-left">
              Provide URLs of reference materials for AI to scrape and analyze,
              resulting in more relevant and context-aware responses.
            </p>
          </div>
          <menu className="hidden space-y-1 lg:block">
            <FeatureListItem feature="Add References" />
            <FeatureListItem feature="AI Scraping" />
            <FeatureListItem feature="Context-Aware Responses" />
          </menu>
        </div>
      </div>

      <div className="relative flex translate-y-10 flex-col place-items-center md:translate-y-0">
        {/* <Image alt="svg" src="/svg/target-bg.svg" fill={true} />
        <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} /> */}
      </div>
    </section>
  );
};

export default WebScrapeCard;
