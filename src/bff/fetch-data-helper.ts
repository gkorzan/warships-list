import { ResponceBodyType } from './models/responce.types';

const fetchDataHelper = async (url: string): Promise<object[] | object | string> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const body: ResponceBodyType = await response.json();
  if (body.status !== 'ok') throw Error('Fetching data error');

  return body.data;
};

export { fetchDataHelper };
