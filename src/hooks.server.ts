export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/health')) {
		return new Response();
	}

	const response = await resolve(event);
	return response;
}
