import each from 'jest-each';

import { isValidNorwegianOrganizationNumber } from './organization-number-validator';

describe('organization-number-validator', () => {
  describe('isValidNorwegianOrganizationNumber', () => {
    each`
      organizationNumber   | expected
      ${1}                 | ${false}
      ${undefined}         | ${false}
      ${null}              | ${false}
      ${'12345678'}        | ${false}
      ${'123456785'}       | ${true}
      ${123456785}         | ${true}
    `.it(
      'should return $expected when validating $organizationNumber',
      ({ organizationNumber, expected }) => {
        expect(isValidNorwegianOrganizationNumber(organizationNumber)).toBe(
          expected
        );
      }
    );
  });
});
