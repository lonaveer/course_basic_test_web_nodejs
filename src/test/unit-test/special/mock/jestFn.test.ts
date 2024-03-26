import * as normalModule from '../../../../app/special/normalModule';
import * as normalFunction from '../../../../app/special/normalFunction';

jest.mock('../../../../app/special/normalModule', () => {
    return {
      sum: jest.fn().mockReturnValue(10),
    };
});

jest.mock('../../../../app/special/normalFunction', () => {
    return {
      add: jest.fn().mockReturnValue(20),
    };
});

test('jest.fn', () => {
    expect(normalModule.sum(1, 2)).toBe(10);
    expect(normalModule.sum).toHaveBeenCalledTimes(1);
    expect(normalModule.sum).toHaveBeenCalledWith(1, 2);
    expect(normalModule.sum).toHaveLastReturnedWith(10);

    expect(normalFunction.add(3, 4)).toBe(20);
    expect(normalFunction.add).toHaveBeenCalledTimes(1);
    expect(normalFunction.add).toHaveBeenCalledWith(3, 4);
    expect(normalFunction.add).toHaveLastReturnedWith(20);
});