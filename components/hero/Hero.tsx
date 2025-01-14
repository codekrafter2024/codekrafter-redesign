// import HeroBadge from "./hero-badge";
// import HeroButton from "./hero-button";
import { getDescription, getTitle } from "@/lib/parseHeroHtml";

const Hero = () => {
	const title = getTitle();
	const description = getDescription();

	return (
		<section className='py-24 sm:py-16 lg:pt-48'>
			<div className=' px-4 mx-auto  sm:px-6 lg:px-8'>
				<div className='mx-auto text-center lg:items-center '>
					<div className='text-center  flex flex-col items-center justify-center '>
						{/* <HeroBadge /> */}
						<div>
							<h1 className='text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl sm:leading-tight lg:text-5xl xl:text-6xl lg:leading-tight '>
								{title}
							</h1>
							<p className='lg:text-lg text-sm max-w-sm lg:max-w-xl break-words mt-5 text-black/60 dark:text-white/60 my-8 mx-auto'>
								{description}
							</p>
							{/* <HeroButton /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
