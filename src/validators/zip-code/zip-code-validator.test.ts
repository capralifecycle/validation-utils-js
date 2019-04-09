import each from 'jest-each';

import { isValidZipCode } from './zip-code-validator';

describe('zip-code', () => {
  describe('isValidZipCode', () => {
    each`
      zipCode       | expected
      ${'0001'}     | ${true}
      ${'9999'}     | ${true}
      ${1234}       | ${true}
      ${9000}       | ${true}
      ${'123'}      | ${false}
      ${123}        | ${false}
      ${'12345'}    | ${false}
      ${12345}      | ${false}
      ${undefined}  | ${false}
      ${null}       | ${false}
    `.it(
      'should return $expected when validating $zipCode',
      ({ zipCode, expected }) => {
        expect(isValidZipCode(zipCode)).toBe(expected);
      }
    );
  });
});
