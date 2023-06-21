export const isNotEmptyArray = <T>(
	sample: T
): sample is Extract<T, Array<any>> => {
	return Array.isArray(sample) && sample.length > 0;
};
