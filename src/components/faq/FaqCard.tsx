import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import React from 'react'

const FaqCard = () => {
  return (
          <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-base lg:text-lg">Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="md:text-base lg:text-lg">Is it styled?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="md:text-base lg:text-lg">Is it animated?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It&#39;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      }

export default FaqCard
