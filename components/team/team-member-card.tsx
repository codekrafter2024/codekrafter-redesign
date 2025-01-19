import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TeamMemberProps } from "./Team";
import SocialLink from "./social-link";

const TeamMemberCard = ({
	name,
	role,
	image,
	socialLinks,
}: TeamMemberProps) => {
	return (
		<div
			className={cn(
				"relative group overflow-hidden rounded-xl border p-6 text-center",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className='flex flex-col items-center'>
				<img
					src={image}
					alt={name}
					className='w-32 h-32 rounded-full mb-4 object-cover'
				/>
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
					<SocialLink
						href={socialLinks.github}
						icon={<Github className='w-5 h-5' />}
					/>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
