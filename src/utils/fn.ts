type Fn<A, B> = (arg: A) => B;
type FnS<A extends ReadonlyArray<unknown>, B> = (...arg: A) => B;

export function compose<A extends ReadonlyArray<unknown>, B, C>(
	f1: FnS<A, B>,
	f2: Fn<B, C>
): FnS<A, C>;
export function compose<A extends ReadonlyArray<unknown>, B, C, D>(
	f1: FnS<A, B>,
	f2: Fn<B, C>,
	f3: Fn<C, D>
): FnS<A, D>;
export function compose<A extends ReadonlyArray<unknown>, B, C, D, E>(
	f1: FnS<A, B>,
	f2: Fn<B, C>,
	f3: Fn<C, D>,
	f4: Fn<D, E>
): FnS<A, E>;

export function compose(...fns: Array<(...a: unknown[]) => unknown>): unknown {
	return (...a: unknown[]) => fns.slice(1).reduce((acc, fn) => fn(acc), fns[0](...a));
}
