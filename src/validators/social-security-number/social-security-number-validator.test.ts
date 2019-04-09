import each from 'jest-each';

import { isValidSocialSecurityNumber } from './social-security-number-validator';

describe('social-security-number-validator', () => {
  describe('isValidSocialSecurityNumber', () => {
    each`
      socialSecurityNumber    | expected
      ${'12345678901'}        | ${false}
      ${'1234567890'}         | ${false}
      ${'123456789012'}       | ${false}
      ${'a234578901'}         | ${false}
      ${null}                 | ${false}
      ${undefined}            | ${false}
    `.it(
      'should return $expected for $socialSecurityNumber',
      ({ socialSecurityNumber, expected }) => {
        expect(isValidSocialSecurityNumber(socialSecurityNumber)).toBe(
          expected
        );
      }
    );
  });
});
