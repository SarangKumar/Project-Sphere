import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";
import React from "react";

const AiAssistantCard = ({ className }: { className?: string }) => {
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
              <Bot className="stroke-primary stroke-[1.8]" />
            </span>
            <h3 className="text-center text-lg font-medium text-foreground lg:text-left">
              AI-Powered Assistance
            </h3>
            <p className="text-balance text-center text-sm text-secondary-foreground lg:text-left">
              Enhance your projects with our advanced AI assistance. From
              generating content to providing insights, our AI is here to help
              you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex translate-y-10 flex-col place-items-center md:translate-y-0"></div>
    </section>
  );
};

export default AiAssistantCard;
