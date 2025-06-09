"use client";

import { createContext, memo, useContext, useState } from "react";
import type { ModalContextProps, ModalProviderProps } from "./modal.definition";

const id = memo(() => Math.random().toString());

export const ModalContext = createContext<ModalContextProps>({
  open: false,
  onOpenChange: (e) => {},
});

export function ModalRoot({
  children,
  open: openProp,
  defaultOpen = undefined,
  onOpenChange,
}: ModalProviderProps) {
  const [internalOpen, setInternalOpen] = useState<boolean>(
    defaultOpen ?? false
  );

  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  function handleOpenChange(nextOpen: boolean) {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }
  }

  return (
    <ModalContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within <Modal>");
  }
  return context;
}
