import each from 'jest-each';

import { isValidEmailAddress } from './email-validator';

describe('email-validator', () => {
  describe('isValidEmailAddress', () => {
    each`
      emailAddress              | expected
      ${'valid@email.com'}      | ${true}
      ${'valid@email.co.uk'}    | ${true}
      ${'some+valid@email.com'} | ${true}
      ${'some_valid@email.com'} | ${true}
      ${'invalid@email'}        | ${false}
      ${'invalid.email.com'}    | ${false}
      ${'@email.com@email.com'} | ${false}
      ${'@invalid@email.com'}   | ${false}
      ${undefined}              | ${false}
      ${null}                   | ${false}
    `.it(
      'should return $expected when validating $emailAddress',
      ({ emailAddress, expected }) => {
        expect(isValidEmailAddress(emailAddress)).toBe(expected);
      }
    );
  });
});
