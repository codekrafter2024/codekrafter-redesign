import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const font = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://codekrafter.xyz"),
	title: {
		default: "CodeKrafter | Professional IT Solutions & Digital Services",
		template: "%s | CodeKrafter",
	},
	description:
		"CodeKrafter provides professional web development, mobile apps, digital marketing, and graphic design services. Your one-stop solution for all IT needs.",
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
	authors: [{ name: "CodeKrafter Team" }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "CodeKrafter | Professional IT Solutions & Digital Services",
		description:
			"CodeKrafter provides professional web development, mobile apps, digital marketing, and graphic design services. Your one-stop solution for all IT needs.",
		type: "website",
		url: "https://codekrafter.xyz",
		locale: "en_US",
		siteName: "CodeKrafter",
		images: [
			{
				url: "/public/code-logo.png",
				width: 1200,
				height: 630,
				alt: "CodeKrafter Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CodeKrafter | Professional IT Solutions",
		description: "Your one-stop solution for all IT needs and services",
		images: ["/public/code-logo.png"],
	},
	alternates: {
		canonical: "https://codekrafter.xyz",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark' data-theme='dark'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body
				className={`${font.className} antialiased  bg-gray-100  transition-all  duration-200 dark:bg-[#10100f] relative dark:text-white text-black`}
			>
				<Script
					id='structured-data'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "CodeKrafter",
							url: "https://codekrafter.xyz",
							logo: "https://codekrafter.xyz/code-logo.png",
							description:
								"CodeKrafter provides professional web development, mobile apps, digital marketing, and graphic design services.",
							address: {
								"@type": "PostalAddress",
								addressCountry: "India",
							},
							contactPoint: {
								"@type": "ContactPoint",
								contactType: "customer service",
								email: "contact@codekrafter.xyz",
							},
							sameAs: [
								"https://twitter.com/codekrafter",
								"https://www.linkedin.com/company/codekrafter",
								// Add other social profiles if available
							],
						}),
					}}
				/>
				{children}
			</body>
			<GoogleAnalytics gaId='G-7CYF458LNH' />
		</html>
	);
}
