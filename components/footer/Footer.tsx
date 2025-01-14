import React from "react";
import { CTA } from "./cta";
import { Copyright } from "./copyright";

const Footer = () => {
	return (
		<footer className='xl:px-16 md:px-8 px-6 py-8 relative'>
			<div className='absolute w-40 h-40 left-[45%] bottom-0 bg-[#65c4fa] border rounded-full blur-[100px]' />
			<div className='2xl:max-w-[1280px]  md:max-w-3xl lg:max-w-7xl  mx-auto flex flex-col gap-8'>
				<CTA />
				<Copyright />
			</div>
		</footer>
	);
};

export default Footer;
