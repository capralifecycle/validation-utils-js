import { mod11 } from '../../utils/mod11';

export const isValidNorwegianAccountNumber = (
  accountNumber: string
): boolean => {
  const trimmed = ('' + accountNumber).replace(/\./g, '').trim();
  return (
    /^\d{11}$/.test(trimmed) &&
    mod11(trimmed.substr(0, 10)) === parseInt(trimmed.substr(-1), 10)
  );
};
