export type Nullable<T> = T | null | undefined;

export type Nullify<T> = Nullable<{ [K in keyof T]: Nullable<T[K]> }>;

export type Titled = Nullify<
	{ titre: string } | { titre_original: string } | { titre_english: string } | { title: string }
>;

export type Sluggified = Nullify<{ slug: string }>;
