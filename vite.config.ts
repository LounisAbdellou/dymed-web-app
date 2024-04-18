import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from "process";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": env,
	},
	resolve: {
		alias: {
			"@assets": `${path.resolve(__dirname, "./src/assets/")}`,
			"@pages": `${path.resolve(__dirname, "./src/pages/")}`,
			"@layouts": `${path.resolve(__dirname, "./src/layouts/")}`,
			"@styles": `${path.resolve(__dirname, "./src/styles/")}`
		}
	}
});
