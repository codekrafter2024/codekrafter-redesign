import { teamMembers } from "@/constants/data";
import TeamMemberCard from "./team-member-card";

export interface TeamMemberProps {
	name: string;
	role: string;
	image: string;
	socialLinks: {
		twitter: string;
		linkedin: string;
		github: string;
	};
}

const Team = () => {
	return (
		<div className='max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8'>
			<div className='text-center'>
				<h2 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF3CAC] via-text-sky-500 to-sky-400 inline-block text-transparent bg-clip-text'>
					Meet Our Team
				</h2>
				<p className='mt-4 max-w-2xl mx-auto text-sm lg:text-lg text-black/60 dark:text-white/60'>
					Our talented team of professionals dedicated to delivering
					exceptional results
				</p>
			</div>
			<div className='mt-12 space-y-8'>
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{teamMembers.slice(0, 3).map((member, index) => (
						<TeamMemberCard key={index} {...member} />
					))}
				</div>
				<div className='grid gap-8 sm:grid-cols-2 px-0 md:px-[20%]'>
					{teamMembers
						.slice(3, teamMembers.length)
						.map((member, index) => (
							<TeamMemberCard key={index} {...member} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Team;
