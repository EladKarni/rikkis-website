import Accordion from '@/components/ui/accordion'
import { faqItems } from '@/consts/faqItems'

const FAQ = () => {
    return (
        <section className="hero container mx-auto py-10 mb-8">
            <div className="hero-content p-0 flex-col lg:flex-row justify-between">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">FAQ</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full lg:max-w-xl shadow-2xl bg-base-100">
                    <div className='form-body p-4 flex flex-col gap-8'>
                        {faqItems.map(({ question, answer, id }) => (
                            <Accordion key={id} question={question} answer={answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ