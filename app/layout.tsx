import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "CodeKrafter",
	description: "IT Solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark' data-theme='dark'>
			<body
				className={`${font.className} antialiased  bg-gray-100  transition-all  duration-200 dark:bg-[#10100f] relative dark:text-white text-black`}
			>
				{children}
			</body>
		</html>
	);
}
