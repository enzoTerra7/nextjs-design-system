import { AccordionTriggerProps } from "./accordion.definition";
import { cn } from "@/lib/cn";

export function AccordionTrigger({
  className,
  ...props
}: AccordionTriggerProps) {
  return (
    <summary
      className={cn(
        "text-foreground group p-2 relative flex flex-1 items-center transition-all group-data-[state=open]:text-accent-foreground pr-6 cursor-pointer hover:bg-accent hover:text-accent-foreground border-b border-border",
        className
      )}
      {...props}
    />
  );
}
