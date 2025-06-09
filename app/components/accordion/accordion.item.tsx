"use client";

import { memo, useContext } from "react";
import { AccordionContext } from "./accordion.provider";
import { AccordionItemProps } from "./accordion.definition";
import { cn } from "@/lib/cn";

const id = memo(() => Math.random().toString());

export function AccordionItem({
  value,
  className,
  ...props
}: AccordionItemProps) {
  const { open, onOpenChange, name } = useContext(AccordionContext);

  return (
    <details
      id={id.toString()}
      open={open === value}
      name={name}
      onToggle={(e) => {
        e.preventDefault();
        // @ts-expect-error always will have an id
        if (e.target.id === id) {
          onOpenChange(open === value ? undefined : value);
        }
      }}
      className={cn(
        "group transition-all bg-background first:rounded-t-md last:data-[state=open]:rounded-b-md overflow-hidden data-[state=open]:bg-accent/50",
        className
      )}
      data-state={open === value ? "open" : "closed"}
      {...props}
    />
  );
}
