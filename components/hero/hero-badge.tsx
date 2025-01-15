import React from "react";

const HeroBadge = () => {
	return (
		<div className='group lg:mx-0 mx-auto relative flex max-w-fit flex-row items-center justify-start rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out my-3 [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40 cursor-pointer'>
			<div className='absolute inset-0 block h-full w-full animate-textgradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]' />
			🚀{" "}
			<hr className='mx-2 h-4 w-[1px] shrink-0 bg-gray-300 dark:bg-gray-800' />{" "}
			<span className='inline animate-textgradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent'>
				Your Projects Delivered Promptly and Efficiently
			</span>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='lucide lucide-chevron-right ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5'
			>
				<path d='m9 18 6-6-6-6' />
			</svg>
		</div>
	);
};

export default HeroBadge;
