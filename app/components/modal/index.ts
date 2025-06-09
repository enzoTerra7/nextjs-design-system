import { ModalContent } from "./modal.content";
import { ModalRoot } from "./modal.provider";
import { ModalTrigger } from "./modal.trigger";
import { ModalOverlay } from "./modal.overlay";
import { ModalPortal } from "./modal.portal";

export const Modal = Object.assign(ModalRoot, {
  Overlay: ModalOverlay,
  Trigger: ModalTrigger,
  Content: ModalContent,
  Portal: ModalPortal,
});
