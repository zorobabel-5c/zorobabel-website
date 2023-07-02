import type { Nullable } from './types';

export function truncate(str: string, len = 50): string {
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
	if (str.match(/\s{2,}|--{2,}|\s-|-\s/))
		return encodeURIComponent(str).replaceAll('-', '--').replace(/\s/g, '-');
	return encodeURIComponent(str.replaceAll('-', '--').replace(/\s/g, '-'));
}

export function decodeTitle(str: Nullable<string>): string {
	if (!str) return '';
	return decodeURIComponent(str)
		.replaceAll('--', '%20')
		.replaceAll('-', ' ')
		.replaceAll('%20', '-');
}
