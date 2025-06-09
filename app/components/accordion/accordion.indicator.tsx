import { AccordionIndicatorProps } from "./accordion.definition";
import { cn } from "@/lib/cn";

export function AccordionIndicator({
  children,
  className,
}: AccordionIndicatorProps) {
  return (
    <span
      className={cn(
        "absolute right-0 size-4 -translate-x-full group-data-[state=open]:rotate-180 group-data-[state=open]:text-red-500",
        className
      )}
    >
      {children}
    </span>
  );
}
