import HeroBadge from "./hero-badge";
import { getDescription, getTitle } from "@/lib/parseHeroHtml";
import RainbowButton from "../ui/rainbow-button";
import Vortex from "../ui/vortex";

const Hero = () => {
	const title = getTitle();
	const description = getDescription();

	return (
		<section className='relative'>
			<Vortex
				backgroundColor='#000000'
				className='flex items-center flex-col justify-center px-2 md:px-10 w-full h-full py-12 md:py-24'
			>
				<div className='px-4 mx-auto sm:px-6 lg:px-8 md:py-0 '>
					<div className='mx-auto text-center lg:items-center'>
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
								<div className='hidden md:block'>
									<RainbowButton />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center mt-2 space-y-4'>
					<div className='block md:hidden'>
						<RainbowButton />
					</div>
				</div>
			</Vortex>
		</section>
	);
};

export default Hero;
