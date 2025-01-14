/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PlanCard = ({ plan }: { plan: any }) => {
	return (
		<label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer rounded-2xl dark:border-gray-800 dark:border p-4'>
			<div className='dark:bg-[#0f0f10] border-none bg-white h-full rounded-2xl shadow-lg'>
				<div className='flex flex-col space-y-1.5 p-6'>
					<button
						type='button'
						role='radio'
						aria-checked='false'
						data-state='unchecked'
						value={plan.title}
						className='aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 sr-only'
						tabIndex={-1}
						data-radix-collection-item=''
					/>
					<h3 className='text-2xl font-semibold leading-none tracking-tight'>
						{plan.title}
					</h3>
					<p className='text-sm text-slate-500 dark:text-slate-400'>
						{plan.desc}
					</p>
				</div>
				<div className='p-6 pt-0 flex-1'>
					<p className='text-sm text-muted-foreground mb-4'>
						<span className='text-4xl font-extrabold text-orange-400'>
							₹{plan.price}
						</span>{" "}
						/ month
					</p>
					<button className='items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 text-black shadow-xl hover:bg-white/90 hover:text-slate-900 dark:border-slate-800 h-10 px-4 py-2 my-8 dark:bg-gradient-to-r dark:from-red-500 dark:via-purple-500 w-full dark:to-blue-300 dark:bg-black dark:text-transparent dark:hover:bg-black dark:hover:text-white dark:bg-clip-text bg-300% animate-gradient justify-center rounded-xl flex'>
						Get Started ✨
					</button>
					<ul className='space-y-3'>
						{plan.features.map((feature: string, _idx: number) => (
							<li
								key={"feature-" + _idx}
								className='flex items-center gap-x-2'
							>
								<span>✅ </span>
								<span className='text-sm'>{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</label>
	);
};

export default PlanCard;
