import axios from 'axios';

const api_key = 'DEMO_KEY';

interface Params {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const rover = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  params: { api_key },
});

export const formatParams = (params: Params) => {
  const filtered_params: Params = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value),
  );

  const url_params = new URLSearchParams(filtered_params);

  return url_params.toString();
};
