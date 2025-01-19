import Button from "@/components/ui/rainbow-button";

const CTA = () => {
	return (
		<div className='flex items-center justify-between flex-wrap gap-5'>
			<h2 className='font-bold md:text-[40px] text-[20px] text-black  dark:text-white'>
				Contact Us
			</h2>
			<Button />
		</div>
	);
};

export default CTA;
