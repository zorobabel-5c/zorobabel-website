export async function getVideoIframe(link: string) {
	const resp = await fetch(`https://vimeo.com/api/oembed.json?url=${link}`);
	const json = (await resp.json()) as Response;
	return json;
}
