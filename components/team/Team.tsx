import { teamMembers } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Github } from "lucide-react";

interface TeamMemberProps {
	name: string;
	role: string;
	image: string;
	socialLinks: {
		twitter: string;
		linkedin: string;
		github: string;
	};
}

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

const SocialLink = ({
	href,
	icon,
}: {
	href: string;
	icon: React.ReactNode;
}) => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className='text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors'
	>
		{icon}
	</a>
);

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF3CAC] via-text-sky-500 to-sky-400 inline-block text-transparent bg-clip-text">
          Meet Our Team
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm lg:text-lg text-black/60 dark:text-white/60">
          Our talented team of professionals dedicated to delivering exceptional results
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
