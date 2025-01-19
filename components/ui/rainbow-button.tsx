import React from "react";
import { cn } from "@/lib/utils";
import { calUrl } from "@/constants/data";

interface PulsatingButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	pulseColor?: string;
	duration?: string;
}

const RainbowButton = React.forwardRef<HTMLButtonElement, PulsatingButtonProps>(
	(
		{ className, pulseColor = "#3b82f6", duration = "1.5s", ...props },
		ref
	) => {
		return (
			<div className='flex items-center justify-center'>
				<a target='_blank' href={calUrl}>
					<button
						ref={ref}
						className={cn(
							"relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground",
							className
						)}
						style={
							{
								"--pulse-color": pulseColor,
								"--duration": duration,
							} as React.CSSProperties
						}
						{...props}
					>
						<div className='relative z-10'>Schedule a Call</div>
						<div className='absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit' />
					</button>
				</a>
			</div>
		);
	}
);

RainbowButton.displayName = "RainbowButton";

export default RainbowButton;
