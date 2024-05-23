type AccordionProps = {
    question: string
    answer: string
    key: number
}

const Accordion = ({ question, answer, key }: AccordionProps) => {
    return (
        <div key={key} className="collapse collapse-arrow bg-primary/25">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>

    )
}

export default Accordion