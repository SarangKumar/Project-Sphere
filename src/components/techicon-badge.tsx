import React from "react";
import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";

interface TechIconBadgeProps {
  iconName: string;
  className?: string;
  name?: string;
  grayscale?: boolean;
}

const TechIconBadge: React.FC<TechIconBadgeProps> = ({
  iconName,
  className,
  name,
  grayscale = false,
}) => {
  return (
    <span className={cn("flex items-center justify-center")}>
      <StackIcon
        name={iconName}
        grayscale={grayscale}
        className={cn(
          "size-6 rounded bg-foreground p-1 shadow-sm transition-colors hover:bg-muted-foreground md:size-10 md:bg-none md:shadow-none",
          className
        )}
      />
      {/* <span className="hidden text-xs md:inline">{iconName || name}</span> */}
      <span className="sr-only">{iconName || name}</span>
    </span>
  );
};

export default TechIconBadge;
