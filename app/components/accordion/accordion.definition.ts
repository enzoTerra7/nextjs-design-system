import { PropsWithChildren } from "react";

export type AccordionContextType = {
  open: string | undefined;
  onOpenChange: (open: string | undefined) => void;
  name: string;
};

export type AccordionProviderProps = {
  open?: string;
  defaultValue?: string;
  onOpenChange?: (open: string | undefined) => void;
} & PropsWithChildren;

export type AccordionItemProps = {
  value: string;
} & React.ComponentProps<"details">;

export type AccordionTriggerProps = {} & React.ComponentProps<"summary">;

export type AccordionIndicatorProps = {
  className?: string;
} & PropsWithChildren;

export type AccordionContentProps = {} & React.ComponentProps<"div">;
