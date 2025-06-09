"use client";
import { Slot } from "@radix-ui/react-slot";
import { type ModalTriggerProps } from "./modal.definition";
import { cn } from "@/lib/cn";
import { useModalContext } from "./modal.provider";

export function ModalTrigger({
  className,
  asChild,
  ...props
}: ModalTriggerProps) {
  const { onOpenChange, open } = useModalContext();
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "p-2 rounded-md inline-flex gap-2 items-center justify-center border",
        className
      )}
      onClick={() => onOpenChange(!open)}
      {...props}
    />
  );
}
