import { Mocks, mocks } from './mocks';

const MOCKS_ENABLED = true;

export function mocksEnabled() {
  return MOCKS_ENABLED && process.env.NODE_ENV !== 'production';
}

export async function getMock<K extends keyof Mocks>(key: K): Promise<Mocks[K]> {
  await sleep();
  return mocks[key];
}
