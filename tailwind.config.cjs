/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: ['Josefin Sans']
			},
			gridTemplateColumns: {
				films: '45% minmax(0, 1fr)'
			}
		},
		screens: {
			xs: '360px',
			sm: '420px',
			mm: '512px',
			md: '672px',
			lg: '800px'
		}
	},
	plugins: []
};
