import { checkPositiveNumber } from '../../../app/utils/checkPositiveNumber';

describe('checkPositiveNumber function', () => {
  test('throws an error when the number is negative', () => {
    expect(() => checkPositiveNumber(-1)).toThrow("Number is not positive");
  });

  test('does not throw an error when the number is positive', () => {
    expect(() => checkPositiveNumber(1)).not.toThrow();
  });
});