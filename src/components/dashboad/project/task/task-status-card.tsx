import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn, formatDate } from "@/lib/utils";
import { Task, TaskStatus } from "@prisma/client";
import { Clock5 } from "lucide-react";
import React from "react";
import MarkdownRender from "./markdown-render";

function TaskStatusCard({
  task,
  projectName,
}: {
  task: Task;
  projectName: string;
}) {
  return (
    <div className="space-y-1 rounded-md border border-border px-4 py-2 transition-colors hover:border-foreground/40 hover:bg-secondary/10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-secondary-foreground">
          Project: {projectName}
        </span>
        <TaskStatusText status={task.status} />
      </div>
      <Accordion
        type="single"
        collapsible
        className="group flex items-center justify-between"
      >
        <AccordionItem value="item-1" className="w-full border-0">
          <AccordionTrigger className="truncate border-0 pb-1 pt-0 text-left text-xs">
            {task.title}
          </AccordionTrigger>
          <AccordionContent>
            <MarkdownRender>{task.description || ""}</MarkdownRender>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-secondary-foreground">
            Created: {formatDate(task.createdAt)}
          </span>
          {/* <span className="text-xs text-secondary-foreground">
            Updated: {formatDate(task.updatedAt)}
          </span> */}
        </div>
        {task.estimatedTimeForCompletion && (
          <span className="flex items-center gap-x-1 text-[12px] text-secondary-foreground">
            <Clock5 size={14} />
            {task.estimatedTimeForCompletion}{" "}
            {task.estimatedTimeForCompletion >= 1 ? "hr" : "hrs"}
          </span>
        )}
      </div>
    </div>
  );
}

export default TaskStatusCard;

export function TaskStatusText({ status }: { status: TaskStatus }) {
  const taskCorr = [
    { status: "PENDING", color: "bg-yellow-500", text: "Pending" },
    { status: "IN_PROGRESS", color: "bg-blue-500", text: "In Progress" },
    { status: "COMPLETED", color: "bg-teal-600", text: "Completed" },
  ];
  const task = taskCorr.find((task) => task.status === status);
  if (!task) return null;

  return (
    <span className="flex items-center gap-x-2 rounded-full border px-2 py-[1px]">
      <span className={cn("size-2 rounded-full", task.color)}></span>
      <span className="text-[10px] font-semibold capitalize md:text-xs md:font-medium">
        {task.text}
      </span>
    </span>
  );
}
