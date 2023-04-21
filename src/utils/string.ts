import { compose } from './fn';
import type { Nullable, Nullify, Titled } from './types';

export function truncate(str: string, len = 30): string {
	if (str.length > len) {
		return str.slice(0, len) + '...';
	}
	return str;
}

export function removePrefix(str: string, prefix: string): string {
	const [str1, prefix1] = [str, prefix].map((s) => s.replaceAll('’', "'"));
	if (str1.startsWith(prefix1)) {
		return '...' + str1.slice(prefix1.length).replace(/^\W+/, '');
	} else if (/[aeiou]$/.test(prefix1) && str1.startsWith(prefix1.slice(0, -1))) {
		return '...' + str1.slice(prefix1.length).replace(/^\W+/, '');
	}
	return str1;
}

export function encodeTitle(str: Nullable<string>): string {
	if (!str) return '';
	return str.replaceAll('_', '__').replace(/\s/g, '_');
}

export function decodeTitle(str: Nullable<string>): string {
	if (!str) return '';
	return str.replace(/_(?!_)/g, ' ').replaceAll('__', '_');
}

export function getTitle(titled: Nullable<Titled>): string {
	if (!titled) return '';
	if ('titre' in titled) return titled.titre ?? '';
	if ('titre_original' in titled) return titled.titre_original ?? '';
	if ('titre_english' in titled) return titled.titre_english ?? '';
	return '';
}

export const getAndEncodeTitle = compose(getTitle, encodeTitle);
