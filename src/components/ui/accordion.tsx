import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { faqType } from "@/types/faqType";
import { FC } from "react";

interface AccordionProps {
  faqData: faqType;
  selectedID: string;
  setSelectedFAQID: Function;
}

const Accordion: FC<AccordionProps> = ({
  faqData: { question, id, answer },
  setSelectedFAQID,
  selectedID,
}) => {
  return (
    <div key={id} className="collapse collapse-arrow bg-primary/25">
      <input
        id={id}
        className="accordion-trigger-input"
        type="radio"
        name="faq"
        onChange={(e) => setSelectedFAQID(e)}
        value={id}
        checked={selectedID === id}
      />
      <label className="collapse-title text-xl font-medium" htmlFor={id}>
        {question}
      </label>
      <article className="collapse-content">
        <div className="[&_a]:text-primary-500 [&_a]:font-bold min-h-40">
          {documentToReactComponents(answer)}
        </div>
      </article>
    </div>
  );
};

export default Accordion;
