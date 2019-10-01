export const isNonEmptyString = (value: string): boolean =>
  !!value && value.constructor === String;

// https://no.wikipedia.org/wiki/MOD11
export const mod11 = (value: string): number => {
	const sum = value.split('').reverse().reduce((acc, x, i) =>
		acc + parseInt(x) * [2,3,4,5,6,7][i%6]
	, 0)
	return 11 - sum % 11;
}