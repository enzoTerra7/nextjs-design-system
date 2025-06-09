import { AccordionContent } from "./accordion.content";
import { AccordionIndicator } from "./accordion.indicator";
import { AccordionItem } from "./accordion.item";
import { AccordionRoot } from "./accordion.provider";
import { AccordionTrigger } from "./accordion.trigger";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Indicator: AccordionIndicator,
  Content: AccordionContent,
});
