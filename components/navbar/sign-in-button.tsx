import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
	return (
		<Link
			className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 bg-white text-black shadow-xl hover:bg-white/90 hover:text-slate-900 dark:border-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/95 dark:hover:text-black h-9 rounded-md px-3 gap-2'
			href='/sign-in'
		>
			<span className='relative flex shrink-0 overflow-hidden rounded-full h-6 w-6'>
				<Image
					className='aspect-square h-full w-full object-contain'
					alt='User avatar'
					src='/bcalabs.png'
					width={24}
					height={24}
				/>
			</span>
			<span className='hidden sm:inline'>Sign in</span>
			<span className='sr-only'>(navigate to sign-in page)</span>
		</Link>
	);
};

export default SignInButton;
