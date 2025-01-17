import { BentoGrid, BentoGridItem } from "../ui/bentto-grid";
import {
	IconDirectionSign,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";

const FeaturesGrid = () => {
	return (
		<BentoGrid className='max-w-7xl mx-auto md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					className={item.className}
					icon={item.icon}
					image={item.image}
				/>
			))}
		</BentoGrid>
	);
};

export default FeaturesGrid;

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);
const items = [
	{
		title: "Graphic Designing",
		description:
			"We create visually stunning designs that capture attention and convey your brand's message effectively.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <IconDirectionSign className='h-4 w-4 text-neutral-500' />,
		image: "/features/graphic-design.png",
	},
	{
		title: "Web Development",
		description: "We build responsive and user-friendly websites.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
		image: "/features/web-dev.jpg",
	},
	{
		title: "Mobile App Development",
		description: "We develop mobile apps for iOS and Android platforms.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
		image: "/features/app-dev.jpg",
	},
	{
		title: "Content Creation",
		description:
			"We create engaging and informative content for your brand.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
		image: "/features/digital-marketing.png",
	},
];
