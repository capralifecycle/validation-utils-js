import each from 'jest-each';

import { isValidNorwegianAccountNumber } from './account-number-validator';

describe('account-number-validator', () => {
  describe('isValidNorwegianAccountNumber', () => {
    each`
      accountNumber         | expected
      ${1}                  | ${false}
      ${undefined}          | ${false}
      ${null}               | ${false}
      ${'1234567890'}       | ${false}
      ${'12345678903'}      | ${true}
      ${'1234.56.78903'}    | ${true}
      ${12345678903}        | ${true}
    `.it(
      'should return $expected when validating $accountNumber',
      ({ accountNumber, expected }) => {
        expect(isValidNorwegianAccountNumber(accountNumber)).toBe(expected);
      }
    );
  });
});
