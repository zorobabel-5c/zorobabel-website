import { describe, test, assert } from 'vitest';
import { zip, interleave, zipWithNext } from './array';

describe('Array fns', () => {
	test('zip', () => {
		const test = zip([1, 2, 3], ['first', 'second', 'third']);
		assert.deepEqual(test, [
			[1, 'first'],
			[2, 'second'],
			[3, 'third']
		]);
	});
	test('zipWithNext', () => {
		const test = zipWithNext([1, 2, 3, 4]);
		assert.deepEqual(test, [
			[1, 2],
			[2, 3],
			[3, 4]
		]);
	});
	test('interleave', () => {
		const test = interleave([1, 2, 3], ['first', 'second', 'third']);
		assert.deepEqual(test, [1, 'first', 2, 'second', 3, 'third']);
	});
});
