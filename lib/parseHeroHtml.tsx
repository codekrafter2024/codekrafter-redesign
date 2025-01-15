import { ReactNode } from "react";
import { HERO_CONTENT } from "@/constants/data";

const parseHtmlString = (text: string, className: string): ReactNode => {
	return text.split(/(<span>.*?<\/span>|<br\/>)/g).map((part, index) => {
		if (part.startsWith("<span>") && part.endsWith("</span>")) {
			const content = part.replace(/<\/?span>/g, "");
			return (
				<span key={index} className={className}>
					{content}
				</span>
			);
		} else if (part === "<br/>") {
			return <br key={index} />;
		}
		return part;
	});
};

export const getTitle = () => {
	return parseHtmlString(HERO_CONTENT.title, "text-sky-400 font-bold");
};

export const getDescription = () => {
	return parseHtmlString(
		HERO_CONTENT.description,
		"text-black mr-1 dark:text-white"
	);
};
