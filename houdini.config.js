/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: 'https://backend-zorobabel.5c.be/graphql',
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		Date: {
			type: 'string'
		}
	}
};

export default config;
