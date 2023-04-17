export function truncate(str: string, len = 30): string {
	if (str.length > len) {
		return str.slice(0, len) + '...';
	}
	return str;
}

export function removePrefix(str: string, prefix: string): string {
	const [str1, prefix1] = [str, prefix].map((s) => s.replaceAll('’', "'"));
	if (str1.startsWith(prefix1)) {
		return str1.slice(prefix1.length).replace(/^\W+/, '');
	} else if (/[aeiou]$/.test(prefix1) && str1.startsWith(prefix1.slice(0, -1))) {
		return str1.slice(prefix1.length).replace(/^\W+/, '');
	}
	return str1;
}
