export function interleave<T, U>(first: T[], second: U[]): Array<T | U> {
	const [a, b] = [[...first], [...second]];
	const res: Array<T | U> = [];
	for (let i = 0; i < first.length + second.length; i++) {
		if (!a.length) {
			res.push(...b);
			return res;
		}
		if (!b.length) {
			res.push(...a);
			return res;
		}
		if (i % 2 === 0) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			res.push(a.shift()!);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			res.push(b.shift()!);
		}
	}
	return res;
}

export function zip<T, U>(first: T[], second: U[]): Array<[T, U]> {
	if (first.length <= second.length) {
		return first.map((f, i) => [f, second[i]]);
	}
	return second.map((s, i) => [first[i], s]);
}

export function zipWithNext<T>(array: T[]): Array<[T, T]> {
	return zip(array, array.slice(1));
}

type Date_Created = {
	date_created: string | null;
};

export function sortByDateCreated<T extends Date_Created, U extends Date_Created>(
	first: T[],
	second: U[]
): Array<T | U> {
	return [...first, ...second].sort(
		(a, b) => new Date(b.date_created ?? 0).getTime() - new Date(a.date_created ?? 0).getTime()
	);
}

export function pickRandom<T>(first: T[]): T;
export function pickRandom<T, U>(first: T[], second: U[]): T | U;
export function pickRandom<T, U, V>(first: T[], second: U[], third: V[]): T | U | V;
export function pickRandom<T>(...arrays: Array<Array<T>>): T {
	return random(arrays.map(random));
}

function random<T>(first: T[]): T {
	const index = Math.floor(Math.random() * first.length);
	return first[index];
}
