import * as normalModule from '../../../../app/special/normalModule';
import * as normalFunction from '../../../../app/special/normalFunction';
import * as promiseFunction from '../../../../app/special/promiseFunction';

jest.mock('../../../../app/special/normalModule', () => {
    return {
        sum: () => 10
    }
});

jest.mock('../../../../app/special/normalFunction', () => {
    return {
        add: () => 20
    }
});

jest.mock('../../../../app/special/promiseFunction', () => {
    return {
      fetchData: () => Promise.resolve({ data: 'Test Data' })
    };
});

test('jest.mock', async () => {
    expect(normalModule.sum(1, 2)).toBe(10);
    expect(normalModule.sum(10, 20)).toBe(10);
    expect(normalModule.sum(100, 200)).toBe(10);
    // expect(normalModule.sum).toHaveBeenCalledTimes(1);

    expect(normalFunction.add(1, 2)).toBe(20);
    expect(normalFunction.add(10, 20)).toBe(20);
    expect(normalFunction.add(100, 200)).toBe(20);
    // expect(normalFunction.add).toHaveBeenCalledTimes(1);

    expect(await promiseFunction.fetchData()).toEqual({ data: 'Test Data' });
    // expect(promiseFunction.fetchData).toHaveBeenCalledTimes(1);
});