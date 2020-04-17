import { mod11 } from '../../utils/mod11';

export const isValidNorwegianIdentificationNumber = (
  birthNumber: string
): boolean => {
  const trimmed = ('' + birthNumber).replace(/ /g, '').trim();

  if (!/^\d{11}$/.test(trimmed)) {
    return false;
  }

  const checksum1 = mod11(trimmed.substr(0, 9), [2, 5, 4, 9, 8, 1, 6, 7, 3]);
  const checksum2 = mod11(trimmed.substr(0, 10));

  return (
    checksum1 === parseInt(trimmed[9], 10) &&
    checksum2 === parseInt(trimmed[10], 10)
  );
};
