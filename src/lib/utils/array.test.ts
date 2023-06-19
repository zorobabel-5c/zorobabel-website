import { describe, test, assert as viteAssert } from 'vitest';
import { zip, interleave, zipWithNext, groupBy } from './array';
import { assert, property, array, string, integer, object, record, nat } from 'fast-check';

describe('Array fns', () => {
	test('zip', () => {
		assert(
			property(array(string()), array(integer()), (a, b) => {
				viteAssert.equal(zip(a, b).length, Math.min(a.length, b.length));
				viteAssert.deepEqual(
					zip(a, b).map((d) => d[0]),
					a.slice(0, Math.min(a.length, b.length))
				);
				viteAssert.deepEqual(
					zip(a, b).map((d) => d[1]),
					b.slice(0, Math.min(a.length, b.length))
				);
			})
		);
	});
	test('zipWithNext', () => {
		assert(
			property(array(string(), { minLength: 2 }), (a) => {
				viteAssert.equal(zipWithNext(a).length, a.length - 1);
				viteAssert.deepEqual(
					zipWithNext(a).map((d) => d[0]),
					a.slice(0, -1)
				);
				viteAssert.deepEqual(
					zipWithNext(a).map((d) => d[1]),
					a.slice(1)
				);
				viteAssert.deepEqual([...new Set(zipWithNext(a).flat())], [...new Set(a)]);
			})
		);
	});
	test('interleave', () => {
		assert(
			property(array(string()), array(string()), (a, b) => {
				viteAssert.equal(interleave(a, b).length, a.length + b.length);
				if (a.length > b.length) {
					viteAssert.deepEqual(
						interleave(a, b)
							.slice(0, b.length * 2)
							.filter((_, i) => i % 2 !== 0),
						b
					);
				} else {
					viteAssert.deepEqual(
						interleave(a, b)
							.slice(0, a.length * 2)
							.filter((_, i) => i % 2 === 0),
						a
					);
				}
			})
		);
	});
	test('groupBy', () => {
		assert(
			property(array(record({ id: string(), age: nat(30), name: string() })), (items) => {
				const result = groupBy(items, (item) => item.age);
				viteAssert.equal(Object.keys(result).length, new Set(items.map((i) => i.age)).size);
				Object.entries(result).forEach(([key, value]) => {
					viteAssert.isTrue(value.every((val) => val.age === parseInt(key)));
				});
			})
		);
	});
});
