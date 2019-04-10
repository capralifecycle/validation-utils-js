import each from 'jest-each';

import { isNonEmptyString } from './common-validator';

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
});
