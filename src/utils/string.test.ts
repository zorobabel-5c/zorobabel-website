import { describe, test, assert } from 'vitest';
import { property, string } from 'fast-check';
import { encodeTitle, decodeTitle } from './string';

describe('String fns', () => {
	test('encode and decode', () => {
		property(string(), (data) => assert.equal(decodeTitle(encodeTitle(data)), data));
	});
});
