import each from 'jest-each';

import {
  isValidNorwegianCellPhoneNumber,
  isValidNorwegianPhoneNumber
} from './phone-number-validator';

describe('phone-number-validator', () => {
  describe('isValidNorwegianPhoneNumber', () => {
    each`
      phoneNumber           | expected
      ${'81234567'}         | ${true}
      ${'81234567 '}        | ${true}
      ${' 81234567'}        | ${true}
      ${'81 23 45 67'}      | ${true}
      ${'812 34 567'}       | ${true}
      ${'004781234567'}     | ${true}
      ${'0047 81 23 45 67'} | ${true}
      ${'004781234567'}     | ${true}
      ${'+4781234567'}      | ${true}
      ${'01234567'}         | ${false}
      ${'01 23 45 67'}      | ${false}
      ${'8123456'}          | ${false}
      ${'812345678'}        | ${false}
      ${'812 34 5678'}      | ${false}
      ${'8123456a'}         | ${false}
      ${undefined}          | ${false}
      ${null}               | ${false}
    `.it(
      'should return $expected for $phoneNumber',
      ({ phoneNumber, expected }) => {
        expect(isValidNorwegianPhoneNumber(phoneNumber)).toBe(expected);
      }
    );
  });

  describe('isValidCellPhoneNumber', () => {
    each`
      phoneNumber        | expected
      ${'41234567'}      | ${true}
      ${'41 23 45 67'}   | ${true}
      ${'91234567'}      | ${true}
      ${'912 34 567'}    | ${true}
      ${'+4741234567'}   | ${true}
      ${'004741234567'}  | ${true}
      ${'81234567'}      | ${false}
      ${'4123456'}       | ${false}
      ${'41 23 456'}     | ${false}
      ${'412 34 5678'}   | ${false}
      ${'412345678'}     | ${false}
      ${'8123456a'}      | ${false}
      ${undefined}       | ${false}
      ${null}            | ${false}
    `.it(
      'should return $expected for $phoneNumber',
      ({ phoneNumber, expected }) => {
        expect(isValidNorwegianCellPhoneNumber(phoneNumber)).toBe(expected);
      }
    );
  });
});
