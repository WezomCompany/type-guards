export const isNotEmptyString = (sample: unknown): sample is string => {
	return typeof sample === 'string' && sample.length > 0;
};
