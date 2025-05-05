import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "avatar.vercel.sh",
			},
			{
				hostname: "www.elyxm.com",
			},
		],
	},
};

export default nextConfig;
