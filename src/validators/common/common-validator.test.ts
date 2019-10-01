import each from 'jest-each';

import { isNonEmptyString, mod11 } from './common-validator';

describe('common', () => {
  describe('isNonEmptyString', () => {
    each`
      value         | expected
      ${'0'}        | ${true}
      ${'a'}        | ${true}
      ${'!'}        | ${true}
      ${1}          | ${false}
      ${-1}         | ${false}
      ${undefined}  | ${false}
      ${''}         | ${false}
      ${null}       | ${false}
    `.it(
      'should return $expected when validating $value',
      ({ value, expected }) => {
        expect(isNonEmptyString(value)).toBe(expected);
      }
    );
  });

  describe('mod11', () => {
    each`
      value           | expected
      ${'1234567890'} | ${3}
      ${'234567'}     | ${6}
    `.it(
      'should return $expected when validating $value',
      ({ value, expected }) => {
        expect(mod11(value)).toBe(expected);
      }
    );
  });
});
