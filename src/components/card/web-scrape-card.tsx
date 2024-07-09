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

          <div className="-m-10 -translate-y-20 md:-m-16">
            <p className="text-xs leading-[18px] text-secondary-foreground/90">
              Web scraping is an invaluable tool for businesses and researchers
              alike. For example, companies looking to stay ahead of the
              competition can web scrape data from competitor&apos;s websites to
              monitor pricing, product availability, and customer reviews. By
              automating this process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebScrapeCard;
