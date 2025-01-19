import HeroBadge from "./hero-badge";
import { getDescription, getTitle } from "@/lib/parseHeroHtml";
import RainbowButton from "../ui/rainbow-button";

const Hero = () => {
	const title = getTitle();
	const description = getDescription();

	return (
		<section className='py-24'>
			<div className='px-4 mx-auto sm:px-6 lg:px-8'>
				<div className='mx-auto text-center lg:items-center '>
					<div className='text-center  flex flex-col items-center justify-center '>
						<HeroBadge />
						<div>
							<h1 className='text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl xl:text-8xl '>
								{title}
								<span className='bg-gradient-to-r bg-clip-text text-transparent from-blue-900 via-[#63B7EC] to-pink-400 animate-text text-5xl md:text-7xl'>
									CodeKrafter
								</span>
							</h1>
							<p className='lg:text-lg text-sm max-w-sm lg:max-w-xl break-words mt-5 text-black/60 dark:text-white/60 my-8 mx-auto'>
								{description}
							</p>
							<RainbowButton />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
