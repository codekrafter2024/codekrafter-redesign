import { Github, Linkedin, Twitter } from "lucide-react";
import { TeamMemberProps } from "./Team";
import SocialLink from "./social-link";
import Image from "next/image";
import { MagicCard } from "../ui/magic-card";

const TeamMemberCard = ({
	name,
	role,
	image,
	socialLinks,
}: TeamMemberProps) => {
	return (
		<MagicCard
			className='cursor-pointer flex-col whitespace-nowrap text-4xl shadow-2xl w-full overflow-hidden p-6 text-center'
			gradientColor={"#262626"}
		>
			<div className='flex flex-col items-center'>
				<div className='bg-white/50 rounded-full h-32 w-32'>
					<Image
						src={image}
						alt={name}
						className='w-32 h-32 rounded-full mb-4 object-cover'
						width={128}
						height={128}
					/>
				</div>
				<h3 className='text-lg font-semibold text-black dark:text-white'>
					{name}
				</h3>
				<p className='text-sm text-black/60 dark:text-white/60 mb-4'>
					{role}
				</p>

				<div className='flex space-x-4'>
					<SocialLink
						href={socialLinks.twitter}
						icon={<Twitter className='w-5 h-5' />}
					/>
					<SocialLink
						href={socialLinks.linkedin}
						icon={<Linkedin className='w-5 h-5' />}
					/>
					{socialLinks.github && (
						<SocialLink
							href={socialLinks.github}
							icon={<Github className='w-5 h-5' />}
						/>
					)}
				</div>
			</div>
		</MagicCard>
	);
};

export default TeamMemberCard;
