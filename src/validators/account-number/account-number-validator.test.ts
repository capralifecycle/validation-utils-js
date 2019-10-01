import each from 'jest-each';

import { isValidAccountNumber } from './account-number-validator';

describe('account-number-validator', () => {
  describe('isValidAccountNumber', () => {
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
        expect(isValidAccountNumber(accountNumber)).toBe(expected);
      }
    );
  });
});
