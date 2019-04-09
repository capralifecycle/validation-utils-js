import { isValidDate } from './date-validator';

describe('date-validator', () => {
  describe('isValidDate', () => {
    it('should return false given invalid date', () => {
      expect(isValidDate('01.13.2000')).toBe(false);
    });
  });
});
