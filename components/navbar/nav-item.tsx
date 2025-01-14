import Image from "next/image";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = ({ item }: { item: any }) => {
	return (
		<Link
			className='flex flex-row z-10 flex-shrink-0 items-center justify-center lg:space-x-2'
			href={item.href}
		>
			<Image
				alt={""}
				loading='lazy'
				width={32}
				height={32}
				decoding='async'
				data-nimg='1'
				src={item.icon ?? "/ai.svg"}
			/>

			<div className=' sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black'>
				{item.label}
			</div>
		</Link>
	);
};

export default NavItem;
