"use client";
import { useMemo } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./modal.provider";
import { ModalPortalProps } from "./modal.definition";

export function ModalPortal({ children }: ModalPortalProps) {
  const { open } = useModalContext();

  const Portal = useMemo(() => createPortal(children, document.body), [open]);

  if (!open) {
    return;
  }

  return Portal;
}
