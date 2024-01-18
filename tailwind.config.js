/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			backgroundColor: {
				primary: "#ffffff",
				secondary: "#000000",
				th: "#7f7f7f",
				four: "#e8e5e480",
			},
			textColor: {
				primary: "#ffffff",
				secondary: "#000000",
				th: "#7f7f7f",
				four: "#e8e5e480",
			},
			// outlineColor: {
			// 	primary: "#EF4444",
			// },
			// borderColor: {
			// 	primary: "#EF4444",
			// },
		},
		fontFamily: {
			kanit: ["Kanit", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "578px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
