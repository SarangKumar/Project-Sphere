import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaq } from "@/constants";

const Faq = () => {
  return (
    <div className="w-full max-w-screen-lg px-6 lg:mx-auto">
      <h3 className="text-balance text-center text-2xl font-medium md:text-3xl">
        Frequently asked questions
      </h3>

      <Accordion type="single" collapsible className="w-full">
        {pricingFaq.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="text-secondary-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
