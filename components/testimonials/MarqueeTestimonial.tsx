import React from "react";
import { Marquee } from "../ui/marquee";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/constants/data";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const MarqueeTestimonial = () => {
	return (
		<div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg '>
			<Marquee pauseOnHover className='[--duration:20s]'>
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className='[--duration:20s]'>
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f2f3f5] dark:from-[#111110]'></div>
			<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f2f3f5] dark:from-[#111110]'></div>
		</div>
	);
};

export default MarqueeTestimonial;
