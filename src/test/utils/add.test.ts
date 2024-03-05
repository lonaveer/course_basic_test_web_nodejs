import { add } from '../../app/utils/add';

describe('add function', () => {
  test('adds two numbers correctly', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const expected = 8;

    // Act
    const result = add(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });
});

