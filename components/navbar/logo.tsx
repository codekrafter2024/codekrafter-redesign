import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<div className=' mx-auto flex justify-center   flex-1 lg:flex-none  '>
			<Link className='flex items-center p-0' href='/'>
				<Image
					alt='Logo'
					width={50}
					height={50}
					className='mr-2 '
					src='/code-logo.png'
					priority
				/>
				<h2 className='font-extrabold text-center  cursor-pointer text-[24px] leading-[30.24px] dark:text-[#38bdf8]'>
					CodeKrafter
				</h2>
			</Link>
		</div>
	);
};

export default Logo;
