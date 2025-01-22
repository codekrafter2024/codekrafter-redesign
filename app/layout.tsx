import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "CodeKrafter",
	description:
		"CodeKrafter is a one stop solution for all your IT needs and services.",
	keywords: [
		"CodeKrafter",
		"CodeKrafter.xyz",
		"Digital Agency",
		"Digital Agency in India",
		"Digital Agency Near me",
		"Digital Agency in Delhi",
		"Digital Agency in Uttar Pradesh",
		"IT Solutions",
		"Web Development",
		"Software Development",
		"Mobile App Development",
		"SEO",
		"Digital Marketing",
		"Social Media Marketing",
		"Content Writing",
		"Graphic Designing",
		"Logo Designing",
		"Web Designing",
		"Web Development Company",
		"Software Development Company",
		"Mobile App Development Company",
		"SEO Company",
		"Digital Marketing Company",
		"Social Media Marketing Company",
		"Content Writing Company",
		"Graphic Designing Company",
		"Logo Designing Company",
	],
	openGraph: {
		title: "CodeKrafter",
		description:
			"CodeKrafter is a one stop solution for all your IT needs and services.",
		type: "website",
		url: "https://codekrafter.xyz",
		locale: "en_US",
		siteName: "CodeKrafter",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark' data-theme='dark'>
			<body
				className={`${font.className} antialiased  bg-gray-100  transition-all  duration-200 dark:bg-[#10100f] relative dark:text-white text-black overflow-x-hidden`}
			>
				{children}
			</body>
			<GoogleAnalytics gaId='G-4PQVY4XES7' />
		</html>
	);
}
