import { isValidBankAccountNumber } from './bank-account-number-validator';

describe('bank-account-number-validator', () => {
  describe('isValidBankAccountNumber', () => {
    it('should return false for a bank account number with invalid length', () => {
      expect(isValidBankAccountNumber('0123456789')).toBe(false);
    });
  });
});
