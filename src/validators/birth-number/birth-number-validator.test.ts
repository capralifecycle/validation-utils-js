import each from 'jest-each';

import { isValidBirthNumber } from './birth-number-validator';

describe('birth-number-validator', () => {
  describe('isValidBirthNumber', () => {
    each`
      birthNumber         | expected
      ${1}                | ${false}
      ${undefined}        | ${false}
      ${null}             | ${false}
      ${'01010123476'}    | ${true}
      ${'01015780000'}    | ${false}
      ${'29029633310'}    | ${true}
      ${'47086303651'}    | ${true}
      ${47086303651}      | ${true}
    `.it(
      'should return $expected when validating $birthNumber',
      ({ birthNumber, expected }) => {
        expect(isValidBirthNumber(birthNumber)).toBe(expected);
      }
    );
  });
});
