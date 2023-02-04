export function interleave<T, U>(first: T[], second: U[]): Array<T | U> {
	return zip(first, second).flat();
}

export function zip<T, U>(first: T[], second: U[]): Array<[T, U]> {
	if (first.length <= second.length) {
		return first.map((f, i) => [f, second[i]]);
	}
	return second.map((s, i) => [first[i], s]);
}

export function zipWithNext<T>(array: T[]): Array<[T, T]> {
	return array.slice(0, -1).map((f, i) => [f, array[i + 1]]);
}
