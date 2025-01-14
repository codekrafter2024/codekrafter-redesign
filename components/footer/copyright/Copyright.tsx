const Copyright = () => {
	return (
		<div className='flex flex-col'>
			<div className='mb-[50px] h-[2px] bg-white opacity-10' />
			<div className='flex items-center justify-between flex-wrap gap-4'>
				<h2 className='font-extrabold text-center md:text-left text-[24px] text-black dark:text-white'>
					CodeKrafter
				</h2>
				<p className='font-medium  text-[14px] text-black dark:text-white  opacity-100 dark:opacity-50'>
					Copyright &copy; 2025 CodeKrafter. All rights reserved.
				</p>
				<div className='flex dark:hidden gap-4'>
					<a target='_blank' href='https://www.instagram.com/'>
						<img
							alt='Instagram'
							loading='lazy'
							width='32'
							height='32'
							decoding='async'
							data-nimg='1'
							className=' object-contain cursor-pointer'
							src='/lightInsta.svg'
						/>
					</a>
					<a
						target='_blank'
						href='https://www.instagram.com/bca_labs/'
					>
						<img
							alt='Instagram'
							loading='lazy'
							width='32'
							height='32'
							decoding='async'
							data-nimg='1'
							className=' object-contain cursor-pointer'
							src='/lightInsta.svg'
						/>
					</a>
					<a
						target='_blank'
						href='https://www.instagram.com/bca_labs/'
					>
						<img
							alt='Instagram'
							loading='lazy'
							width='32'
							height='32'
							decoding='async'
							data-nimg='1'
							className=' object-contain cursor-pointer'
							src='/lightInsta.svg'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Copyright;
