import type { Nullable, Nullify } from './types';

export function imageFromAssets(id: Nullable<string>): string | undefined;
export function imageFromAssets(asset: Nullable<Nullify<{ id: string }>>): string | undefined;

export function imageFromAssets(
	asset: Nullify<{ id: string }> | Nullable<string>
): string | undefined {
	const format = '?format=auto&quality=50';

	if (!asset) return;
	if (typeof asset === 'string') {
		return 'https://backend.zorobabel.be/assets/' + asset + format;
	}
	if (!asset.id) return;
	return 'https://backend.zorobabel.be/assets/' + asset.id + format;
}
