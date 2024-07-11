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
    <div>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaq.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
