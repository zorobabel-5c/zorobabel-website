import type { HomepageFilms$result } from '$houdini';

export function isAuteur(u: {
	readonly __typename: string | null;
}): u is HomepageFilms$result['auteurs'][number] {
	return u.__typename === 'Films_d_auteur';
}
export function isAtelier(u: {
	readonly __typename: string | null;
}): u is HomepageFilms$result['ateliers'][number] {
	return u.__typename === 'ateliers';
}
export function isEvenement(u: {
	readonly __typename: string | null;
}): u is HomepageFilms$result['evenements'][number] {
	return u.__typename === 'evenements';
}
export function isFilmDAtelier(u: {
	readonly __typename: string | null;
}): u is HomepageFilms$result['films_d_ateliers'][number] {
	return u.__typename === 'films_d_ateliers';
}
export function isEpisode(u: {
	readonly __typename: string | null;
}): u is HomepageFilms$result['episodes'][number] {
	return u.__typename === 'episodes';
}
