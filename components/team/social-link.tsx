import React from "react";

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

export default SocialLink;
