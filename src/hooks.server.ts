export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/health')) {
		return new Response();
	}
	if (event.url.pathname.startsWith('/favicon.ico')) {
		return new Response();
	}

	const response = await resolve(event);
	return response;
}
