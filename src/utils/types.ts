export type Nullable<T> = T | null | undefined;

export type Nullify<T> = { [K in keyof T]: Nullable<T[K]> };

export type Titled = Nullify<
	{ titre: string } | { titre_original: string } | { titre_english: string }
>;
