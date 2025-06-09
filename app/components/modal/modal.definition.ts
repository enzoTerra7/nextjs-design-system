import { PropsWithChildren } from "react";

export type ModalContextProps = {
  open: boolean;
  onOpenChange: (e: boolean) => void;
};

export type ModalProviderProps = PropsWithChildren & {
  open?: boolean;
  onOpenChange?: (e: boolean) => void;
  defaultOpen?: boolean;
};

export type ModalTriggerProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
};

export type ModalPortalProps = PropsWithChildren & {};

export type ModalOverlayProps = React.ComponentProps<"div"> & {};

export type ModalContentProps = React.ComponentProps<"div"> & {};
