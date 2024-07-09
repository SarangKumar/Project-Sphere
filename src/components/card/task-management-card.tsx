"use client";
import { CircleCheckBig, Sparkles, Target } from "lucide-react";
import Flame from "./flame";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import FeatureListItem from "./feature-list-item";

const TaskManagementCard = ({ className }: { className?: string }) => {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <section
      className={cn(
        "card",
        "group/card grid grid-cols-1 gap-4 @container/card lg:grid-cols-2",
        className
      )}
      ref={cardsRef}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      onMouseMove={(event) => handleMouseMove(event)}
    >
      <div className="flex flex-row justify-between @sm/card:justify-center">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="grid size-10 place-items-center rounded bg-background">
              <Target className="stroke-primary stroke-[1.8]" />
            </span>
            <h3 className="text-center text-lg font-medium text-foreground lg:text-left">
              Effortless Task Management
            </h3>
            <p className="text-balance text-center text-sm text-secondary-foreground lg:text-left">
              Stay organized and boost productivity with Project Sphere&apos;s
              Task Tracker. Manage tasks seamlessly and keep your projects on
              track.
            </p>
          </div>
          <menu className="hidden space-y-1 lg:block">
            <FeatureListItem feature="Create and Track" />
            <FeatureListItem feature="Status Updates" />
            <FeatureListItem feature="Collaborate" />
          </menu>
        </div>
      </div>

      <div className="relative flex translate-y-10 flex-col place-items-center justify-center md:translate-y-0">
        <Image alt="svg" src="/svg/target-bg.svg" fill={true} className="p-4" />
        <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
      </div>
    </section>
  );
};

export default TaskManagementCard;
