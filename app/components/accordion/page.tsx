import { ChevronDown } from "lucide-react";
import { Accordion } from ".";
import { AccordionTrigger } from "./accordion.trigger";

export default async function AccordionPage() {
  return (
    <main>
      <p>View accordion componente</p>
      <div className="max-w-sm">
        <Accordion>
          <Accordion.Item value="details-1">
            <AccordionTrigger>
              View 1
              <Accordion.Indicator>
                <ChevronDown />
              </Accordion.Indicator>
            </AccordionTrigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              temporibus harum nam molestiae, suscipit natus beatae adipisci
              voluptatum quod quam, fugiat deserunt laboriosam odio ratione
              fugit. Aspernatur ullam ducimus ea?
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="details-2">
            <AccordionTrigger>
              View 2
              <Accordion.Indicator>
                <ChevronDown />
              </Accordion.Indicator>
            </AccordionTrigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              temporibus harum nam molestiae, suscipit natus beatae adipisci
              voluptatum quod quam, fugiat deserunt laboriosam odio ratione
              fugit. Aspernatur ullam ducimus ea?
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
}
