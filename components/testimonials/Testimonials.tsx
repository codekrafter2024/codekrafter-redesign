import MarqueeTestimonial from "./MarqueeTestimonial";

const Testimonials = () => {
	return (
		<div className='max-w-7xl my-16 text-center lg:max-w-7xl mx-auto'>
			<h2 className='text-3xl lg:text-4xl  mx-auto text-center font-bold  bg-gradient-to-r from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC] inline-block text-transparent bg-clip-text'>
				We Don&apos;t Say, We Deliver
			</h2>
			<p className='my-5 max-w-sm text-sm lg:text-lg text-center mx-auto lg:max-w-xl '>
				Hear from our satisfied clients as they share their experiences
				and the value we&apos;ve delivered.
			</p>
			<MarqueeTestimonial />
		</div>
	);
};

export default Testimonials;
