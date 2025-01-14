import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<div className=' mx-auto flex justify-center   flex-1 lg:flex-none  '>
			<Link className='flex items-center' href='/'>
				<Image
					alt='Logo'
					loading='lazy'
					width='40'
					height='40'
					decoding='async'
					data-nimg='1'
					className='mr-2'
					src='/logo.png'
				/>
				<h2 className='font-extrabold  text-center    cursor-pointer text-[24px] leading-[30.24px] md:mt-1 text-black dark:text-white '>
					Company
				</h2>
			</Link>
		</div>
	);
};

export default Logo;
