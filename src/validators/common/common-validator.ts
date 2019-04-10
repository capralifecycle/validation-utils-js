export const isNonEmptyString = (value: string): boolean =>
  !!value && value.constructor === String;
