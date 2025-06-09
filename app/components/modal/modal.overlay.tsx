"use client";

import { cn } from "@/lib/cn";
import { ModalOverlayProps } from "./modal.definition";
import { useModalContext } from "./modal.provider";

export function ModalOverlay({ className, ...props }: ModalOverlayProps) {
  const { onOpenChange, open } = useModalContext();

  return (
    <div
      {...props}
      onClick={() => onOpenChange(!open)}
      className={cn(
        "fixed inset-0 bg-black/50 backdrop-blur-sm z-10",
        className
      )}
    />
  );
}
