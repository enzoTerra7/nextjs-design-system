"use client";

import { cn } from "@/lib/cn";
import { ModalContentProps } from "./modal.definition";
import { useModalContext } from "./modal.provider";

export function ModalContent({ className, ...props }: ModalContentProps) {
  const { open } = useModalContext();
  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-md shadow-lg p-6 max-w-md overflow-hidden h-0 w-0 opacity-0 transition-all duration-300",
        open && "w-full max-w-lg max-h-[80dvh] h-auto overflow-y-auto opacity-100",
        className
      )}
      {...props}
    />
  );
}
