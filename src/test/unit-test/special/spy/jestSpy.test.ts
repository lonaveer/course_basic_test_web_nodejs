import * as normalModule from '../../../../app/special/normalModule';
import * as normalFunction from '../../../../app/special/normalFunction';
import * as promiseFunction from '../../../../app/special/promiseFunction';

describe('jest.spyOn', () => {
  test('spy on : sum', () => {
    // Arrange
    const sumSpy = jest.spyOn(normalModule, 'sum');

    // Act
    normalModule.sum(1, 2);

    // Assert
    expect(sumSpy).toHaveBeenCalledTimes(1);
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
    expect(sumSpy).toHaveLastReturnedWith(3);

    // ลบ spy
    sumSpy.mockRestore();
  });

  test('spy on : add', () => {
    // Arrange
    const addSpy = jest.spyOn(normalFunction, 'add');

    // Act
    normalFunction.add(3, 4);

    // Assert
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledWith(3, 4);
    expect(addSpy).toHaveLastReturnedWith(7);

    // ลบ spy
    addSpy.mockRestore();
  });

  test('spy on : fetchData (Normal)', async () => {
    // Arrange
    const fetchDataSpy = jest.spyOn(promiseFunction, 'fetchData');

    // Act
    const result = await promiseFunction.fetchData();

    // Assert
    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
    // expect(fetchDataSpy).toHaveLastReturnedWith(result);

    // ลบ spy
    fetchDataSpy.mockRestore();
  });

  test('spy on : fetchData (mockImplementation)', async () => {
    // Arrange
    const mockResult = { data : 'Test Data' }
    const fetchDataSpy = jest.spyOn(promiseFunction, 'fetchData').mockImplementation(() => Promise.resolve(mockResult));

    // Act
    await promiseFunction.fetchData();

    // Assert
    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
    expect(fetchDataSpy).toHaveLastReturnedWith(Promise.resolve(mockResult));

    // ลบ spy
    fetchDataSpy.mockRestore();
  });

  test('spy on : fetchData (mockImplementation)', async () => {
    // Arrange
    const mockResult = { data : 'Test Data' }
    const fetchDataSpy = jest.spyOn(promiseFunction, 'fetchData').mockImplementation(() => Promise.resolve(mockResult));

    // Act
    await promiseFunction.fetchData();

    // Assert
    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
    expect(fetchDataSpy).toHaveLastReturnedWith(Promise.resolve(mockResult));

    // ลบ spy
    fetchDataSpy.mockRestore();
  });

  test('spy on : fetchData (mockResolvedValue)', async () => {
    // Arrange
    const mockResult = 'mock data'
    const fetchDataSpy = jest.spyOn(promiseFunction, 'fetchData').mockResolvedValue(mockResult);

    // Act
    await promiseFunction.fetchData();

    // Assert
    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
    expect(fetchDataSpy).toHaveLastReturnedWith(Promise.resolve(mockResult));
    // await expect(promiseFunction.fetchData()).resolves.toBe(mockResult);

    // ลบ spy
    fetchDataSpy.mockRestore();
  });

  test('spy on : fetchData (mockRejectedValue)', async () => {
    // Arrange
    const mockError = 'mock error'
    const fetchDataSpy = jest.spyOn(promiseFunction, 'fetchData').mockRejectedValue(new Error(mockError));

    // Assert
    await expect(promiseFunction.fetchData()).rejects.toThrow(mockError);

    // ลบ spy
    fetchDataSpy.mockRestore();
  });

  test('spy on : add (mockReturnValue)', async () => {
    // Arrange
    const mockData = 100
    const fetchDataSpy = jest.spyOn(normalFunction, 'add').mockReturnValue(mockData);

    // Act
    normalFunction.add(5, 6);

    // Assert
    expect(normalFunction.add).toHaveBeenCalledTimes(1);
    expect(normalFunction.add).toHaveBeenCalledWith(5, 6);
    expect(normalFunction.add).toHaveLastReturnedWith(mockData);

    // ลบ spy
    fetchDataSpy.mockRestore();
  });
});