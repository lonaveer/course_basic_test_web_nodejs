import { multiply } from '../../../app/utils/multiply';

describe('Test multiply()', () => {
    describe('Not Use : Parametrized Tests', () => {
        test('given 2 and 3 as arguments, returns 6', () => expect(multiply(2, 3)).toBe(6));
        test('given 4 and 5 as arguments, returns 20', () => expect(multiply(4, 5)).toBe(20));
        test('given -1 and 8 as arguments, returns -8', () => expect(multiply(-1, 8)).toBe(-8));
    });

    describe('Use : Parametrized Tests', () => {
        test.each([
          [2, 3, 6],
          [4, 5, 20],
          [-1, 8, -8],
        ])('given %p and %p as arguments, returns %p', (a, b, expectedResult) => {
          expect(multiply(a, b)).toBe(expectedResult);
        });
      });
});