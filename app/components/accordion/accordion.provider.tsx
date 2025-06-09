"use client";

import { createContext, memo, useState } from "react";
import {
  AccordionContextType,
  AccordionProviderProps,
} from "./accordion.definition";

const id = memo(() => Math.random().toString());

const name = `accordion-${id.toString()}`;

export const AccordionContext = createContext<AccordionContextType>({
  onOpenChange: () => {},
  open: undefined,
  name: name,
});

export function AccordionRoot({
  children,
  open: openProp,
  defaultValue = undefined,
  onOpenChange,
}: AccordionProviderProps) {
  const [internalOpen, setInternalOpen] = useState<string | undefined>(
    defaultValue
  );

  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  function handleOpenChange(nextValue: string | undefined) {
    if (onOpenChange) {
      onOpenChange(nextValue);
    }
    if (!isControlled) {
      setInternalOpen(nextValue);
    }
  }

  return (
    <AccordionContext.Provider
      value={{ open, onOpenChange: handleOpenChange, name }}
    >
      {children}
    </AccordionContext.Provider>
  );
}
