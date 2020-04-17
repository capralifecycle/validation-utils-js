import each from 'jest-each';

import { mod11 } from './mod11';

describe('utils', () => {
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
