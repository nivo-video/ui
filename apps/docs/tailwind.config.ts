import type { Config } from "tailwindcss";
import sharedConfig from "@nivo/tailwind-config";

const config: Config = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	presets: [sharedConfig],
	plugins: [],
};

export default config;
