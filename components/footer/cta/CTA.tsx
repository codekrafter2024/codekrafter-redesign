import { calUrl } from "@/constants/data";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const CTA = () => {
	return (
		<div className='flex items-center justify-between flex-wrap gap-5'>
			<h2 className='font-bold md:text-[40px] text-[24px] text-black  dark:text-white'>
				Contact Us
			</h2>
			<a target='_blank' href={calUrl}>
				<button
					type='button'
					className='flex flex-row items-center h-fit py-4 px-6 dark:bg-white bg-[#25618B] rounded-[32px] gap-[8px]'
				>
					<span className='font-normal md:text-[18px] text-[16px]  text-white  dark:text-black'>
						Click Here
					</span>
					<ArrowRightIcon className='md:w-[24px] dark:text-black h-[16px] w-[16px] md:h-[24px] object-contain -rotate-45' />
				</button>
			</a>
		</div>
	);
};

export default CTA;
