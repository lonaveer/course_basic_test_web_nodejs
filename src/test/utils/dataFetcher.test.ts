import { fetchData } from '../../app/utils/dataFetcher';
import axios from 'axios';

// Mock โมดูล axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const fakeData = { title: 'Test Data' };
    mockedAxios.get.mockResolvedValue({ data: fakeData });

    const result = await fetchData('https://example.com/data');

    expect(result).toEqual(fakeData);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://example.com/data');
  });

  it('fetches erroneously data from an API', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Failed to fetch data'));
    await expect(fetchData('https://example.com/data')).rejects.toThrow('Failed to fetch data');
  });
});

