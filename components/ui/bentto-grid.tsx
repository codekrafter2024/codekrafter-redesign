import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	// header,
	icon,
	image,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	// header?: React.ReactNode;
	icon?: React.ReactNode;
	image?: string;
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
				className
			)}
		>
			<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image})` }}></div>
			<div className='group-hover/bento:translate-x-2 transition duration-200'>
				{icon}
				<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
					{title}
				</div>
				<div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
					{description}
				</div>
			</div>
		</div>
	);
};
