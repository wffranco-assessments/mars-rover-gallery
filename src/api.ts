import axios from 'axios';
import { CameraName } from './types';

const api_key = 'DEMO_KEY';

export interface APINasaParams<C = CameraName> {
  camera?: C;
  page?: number;
  sol?: number;
}

export const nasa = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
  params: { api_key },
});

export const formatParams = (params: { [key: string]: unknown; }) => {
  const filtered_params = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value).map(([key, value]) => [key, `${value}`]),
  );

  const url_params = new URLSearchParams(filtered_params);

  return url_params.toString();
};
