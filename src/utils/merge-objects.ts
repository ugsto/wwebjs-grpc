export function mergeObjects<
	T extends Record<string, unknown>,
	U extends Record<string, unknown>,
>(obj1: T, obj2: U): T & U {
	return Object.fromEntries(
		Object.entries(obj1)
			.concat(Object.entries(obj2))
			.filter(([, v]) => v !== undefined),
	) as T & U;
}
