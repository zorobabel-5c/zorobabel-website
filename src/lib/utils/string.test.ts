import { describe, test, assert as viteAssert } from 'vitest';
import { property, string, assert } from 'fast-check';
import { encodeTitle, decodeTitle } from './string';

describe('String fns', () => {
	test('decoding an encoded string produces the original string', () => {
		assert(
			property(string(), (data) => {
				viteAssert.equal(decodeTitle(encodeTitle(data)), data);
				viteAssert.equal(encodeTitle(data).includes(' '), false);
			})
		);
	});
});
