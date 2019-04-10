const isNonEmptyString = (value: string): boolean =>
  !!value && value.constructor === String;

export const isValidNorwegianPhoneNumber = (phoneNumber: string): boolean =>
  isNonEmptyString(phoneNumber) &&
  /^((\+|00)47){0,1}\s{0,1}[1-9](\s{0,1}\d){7}$/.test(phoneNumber.trim());

export const isValidNorwegianCellPhoneNumber = (phoneNumber: string): boolean =>
  isNonEmptyString(phoneNumber) &&
  /^((\+|00)47){0,1}\s{0,1}(4|9)(\s{0,1}\d){7}$/.test(phoneNumber.trim());
