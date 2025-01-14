import DemoVideo from "./demoVideo";

const ProductDemo = () => {
	return (
		<div className='max-w-7xl mx-auto text-center mt-8 lg:mt-16 '>
			<h2 className='text-3xl lg:text-4xl   max-w-2xl text-center font-bold  bg-gradient-to-r from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC] inline-block text-transparent bg-clip-text  '>
				AI Experts Systems can now Solve and Create PYQs{" "}
				<span className='animate-pulse rouded-full border-gray-900 bg-sky-400'></span>
			</h2>
			<p className='my-5 max-w-sm text-sm lg:text-lg text-center mx-auto lg:max-w-xl '>
				Our AI Experts can create &amp; solve PYQs for you. No need of
				searching for PYQs on the internet. We have got you covered.
			</p>
			<DemoVideo />
		</div>
	);
};

export default ProductDemo;
