import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/data";

const FAQ = () => {
	return (
		<div className='my-16 max-w-sm  mx-auto lg:max-w-7xl'>
			<div className='max-w-3xl text-center  mx-auto'>
				<h3 className='text-3xl lg:text-4xl bg-gradient-to-r from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC] inline-block text-transparent bg-clip-text  mx-auto font-bold mb-8 text-center'>
					Frequently Asked Questions
				</h3>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((faq, _idx) => (
						<AccordionItem value={"faq-" + faq.question} key={_idx}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQ;
