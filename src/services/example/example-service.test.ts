import each from 'jest-each';

import { multiply } from './example-service';

interface IParameterizedMultiplication {
  a: number;
  b: number;
  expected: number;
}

describe('example-service', () => {
  describe('simple unit test', () => {
    it('should return 25 when given 5 * 5', () => {
      expect(multiply(5, 5)).toBe(25);
    });
  });

  describe('parameterized unit tests', () => {
    each`
       a     | b    | expected 
       ${2}  | ${2} | ${4}
       ${5}  | ${1} | ${5}
       ${10} | ${7} | ${70}
       ${7}  | ${7} | ${49}
        `.it(
      'should return $expected when given $a * $b',
      ({ a, b, expected }: IParameterizedMultiplication) => {
        expect(multiply(a, b)).toBe(expected);
      }
    );
  });
});
