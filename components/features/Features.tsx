import React from "react";
import FeaturesGrid from "./FeaturesGrid";

const Features = () => {
	return (
		<div className='max-w-[28rem] my-16 text-center lg:max-w-7xl mx-auto'>
			<h2 className='text-3xl lg:text-4xl text-center font-bold  bg-gradient-to-r from-[#FF3CAC] via-text-sky-500 to-sky-400 inline-block text-transparent bg-clip-text '>
				Services We Offer
			</h2>
			<p className='my-5 max-w-sm text-sm lg:text-lg text-center mx-auto lg:max-w-xl '>
				We deliver customized business solutions aimed at optimizing
				efficiency, accelerating growth, and achieving remarkable
				outcomes for your company.
			</p>
			<FeaturesGrid />
		</div>
	);
};

export default Features;
