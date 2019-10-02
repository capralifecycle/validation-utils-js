import { mod11 } from '../common/common-validator';

export const isValidAccountNumber = (accountNumber: string): boolean => {
	const trimmed = ('' + accountNumber).replace(/\./g, '').trim();
	return /^\d{11}$/.test(trimmed) && mod11(trimmed.substr(0, 10)) === parseInt(trimmed.substr(-1),10);
}