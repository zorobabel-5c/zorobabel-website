import { compose } from './fn';
import { encodeTitle } from './string';
import type { Nullable, Titled } from './types';

export function getTitle(titled: Nullable<Titled>): string {
	if (!titled) return '';
	if ('title' in titled) return titled.title ?? '';
	if ('titre' in titled) return titled.titre ?? '';
	if ('titre_original' in titled) return titled.titre_original ?? '';
	if ('titre_english' in titled) return titled.titre_english ?? '';
	return '';
}

export const getAndEncodeTitle = compose(getTitle, encodeTitle);
