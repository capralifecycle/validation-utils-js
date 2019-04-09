export const isValidNorwegianPhoneNumber = (phoneNumber: string): boolean =>
  /^((\+|00)47){0,1}[1-9]\d{7}$/.test(phoneNumber);

export const isValidNorwegianCellPhoneNumber = (phoneNumber: string): boolean =>
  /^((\+|00)47){0,1}(4|9)\d{7}$/.test(phoneNumber);
