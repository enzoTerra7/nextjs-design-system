import { AccordionContentProps } from "./accordion.definition";
import { cn } from "@/lib/cn";

export function AccordionContent({
  className,
  ...props
}: AccordionContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 data-[state=closed]:h-0 data-[state=open]:h-auto p-2 text-secondary-foreground",
        className
      )}
      role="region"
      {...props}
    />
  );
}
