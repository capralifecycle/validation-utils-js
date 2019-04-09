export const isValidEmailAddress = (emailAddress: string): boolean =>
  typeof emailAddress === 'string' &&
  /^[A-Za-z\_\-\.\+]+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailAddress);
