import type { Nullable, Nullify } from './types';

export function imageFromAssets(id: Nullable<string>): string | undefined;
export function imageFromAssets(asset: Nullable<Nullify<{ id: string }>>): string | undefined;

export function imageFromAssets(
	asset: Nullify<{ id: string }> | Nullable<string>
): string | undefined {
	const format = '?format=auto&quality=50';

	if (!asset) return;
	if (typeof asset === 'string') {
		console.log('https://backend.zorobabel.be/assets/' + asset + format);
		return 'https://backend.zorobabel.be/assets/' + asset + format;
	}
	if (!asset.id) return;
	console.log('https://backend.zorobabel.be/assets/' + asset.id + format);
	return 'https://backend.zorobabel.be/assets/' + asset.id + format;
}
