import type { Nullable, Nullify } from './types';

export function imageFromAssets(id: Nullable<string>): string | undefined;
export function imageFromAssets(asset: Nullable<Nullify<{ id: string }>>): string | undefined;

export function imageFromAssets(
	asset: Nullify<{ id: string }> | Nullable<string>
): string | undefined {
	if (!asset) return;
	if (typeof asset === 'string') {
		return 'https://backend-zorobabel.5c.be/assets/' + asset;
	}
	if (!asset.id) return;
	return 'https://backend-zorobabel.5c.be/assets/' + asset.id;
}
