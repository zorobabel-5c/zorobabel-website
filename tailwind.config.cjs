/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: ['Josefin Sans']
				// jost: ['Jost']
			}
		},
		screens: {
			sm: '420px',
			// => @media (min-width: 400px) { ... }

			md: '600px',
			// => @media (min-width: 600px) { ... }

			lg: '800px'
			// => @media (min-width: 800px) { ... }
		}
	},
	plugins: []
};
