export const isValidZipCode = (zipCode: string): boolean =>
  /^\d{4}$/.test(zipCode);
