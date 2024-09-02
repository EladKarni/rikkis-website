"use client";
import Accordion from "@/components/ui/accordion";
import { faqType } from "@/types/faqType";
import { SetStateAction, useState } from "react";

interface FAQPropTypes {
  faqItems: faqType[];
}

const FAQSection = ({ faqItems }: FAQPropTypes) => {
  const [selectedFAQ, setSelectedFAQ] = useState(faqItems[0].id);
  const onOptionChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSelectedFAQ(e.target.value);
  };

  return (
    <section
      id="faq"
      className="hero container mx-auto py-10 mb-8 scroll-mt-[100px]"
    >
      <div className="hero-content p-0 flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">FAQ</h1>
          <p className="py-6">
            Here&apos;s the need-to-know info about Three Rivers Face
            Painting&apos;s services. Use the contact form below to ask any
            other questions and start the booking process!
          </p>
        </div>
        <fieldset className="card shrink-0 w-full lg:max-w-xl">
          <div className="form-body py-4 flex flex-col gap-8">
            {faqItems.map((faq) => (
              <Accordion
                faqData={faq}
                key={faq.id}
                selectedID={selectedFAQ}
                setSelectedFAQID={onOptionChange}
              />
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default FAQSection;
