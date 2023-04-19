export function imageFromAssets(id?: string): string | undefined;
export function imageFromAssets(asset?: { id: string }): string | undefined;

export function imageFromAssets(asset?: { id: string } | string): string | undefined {
	if (!asset) return;
	if (typeof asset === 'string') {
		return 'https://backend-zorobabel.5c.be/assets/' + asset;
	}
	return 'https://backend-zorobabel.5c.be/assets/' + asset.id;
}
