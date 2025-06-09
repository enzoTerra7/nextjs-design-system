import { ChevronDown } from "lucide-react";
import { Modal } from ".";

export default async function AccordionPage() {
  return (
    <main>
      <p>View Modal componente</p>
      <Modal>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <p className="text-red-500">Falaaaaa</p>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    </main>
  );
}
