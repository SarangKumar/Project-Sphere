import { cn } from "@/lib/utils";
import React from "react";
import { MousePointer2, MousePointerClick } from "lucide-react";
import Image from "next/image";

const ColabCard = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "card",
        "group/card relative grid grid-cols-1 gap-4 @container/card",
        className
      )}
    >
      <span className="absolute -bottom-4 -left-4 -z-30 h-3/4 w-2/3 rounded-full bg-primary opacity-20 blur-3xl" />
      <div className="flex flex-row justify-between @sm/card:justify-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="grid size-10 place-items-center rounded bg-background">
              <MousePointerClick className="stroke-primary stroke-[1.8]" />
            </span>
            <h3 className="text-center text-lg font-medium text-foreground lg:text-left">
              Seamless Project Sharing
            </h3>
            <p className="text-balance text-center text-sm text-secondary-foreground lg:text-left">
              Easily share your projects with others using secure, shareable
              links. Collaborate with teammates or showcase your work to clients
              and stakeholders.
            </p>
          </div>
          {/* <menu className="hidden space-y-1 lg:block">
            <FeatureListItem feature="Generate Links" />
            <FeatureListItem feature="Set Expiry" />
            <FeatureListItem feature="Collaborate Effortlessly" />
          </menu> */}
          <div className="">
            <Image
              src="/svg/colab-bg.svg"
              className="absolute -bottom-48 left-8 h-auto opacity-90"
              height={361}
              width={350}
              alt="colab background"
            />
          </div>

          <span className="relative z-50 translate-x-20 translate-y-6 transition-transform duration-500 ease-out group-hover/card:translate-x-4 group-hover/card:translate-y-2">
            <MousePointer2
              size={24}
              className="fill-primary/80 stroke-primary stroke-[0.8]"
            />
            <span className="relative -top-4 left-6 rounded-full border border-border bg-background px-2 py-0.5 text-xxs">
              Sarang
            </span>
          </span>

          <span className="relative z-50 -translate-y-2 translate-x-80 transition-transform duration-500 ease-out group-hover/card:-translate-y-6 group-hover/card:translate-x-20">
            <MousePointer2
              size={24}
              className="fill-primary/80 stroke-primary stroke-[0.8]"
            />
            <span className="relative -top-4 left-6 rounded-full border border-border bg-background px-2 py-0.5 text-xxs">
              Aditi
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ColabCard;
