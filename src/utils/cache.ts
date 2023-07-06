import sleep from './sleep';

const cache: Map<unknown, unknown> = new Map;

type AnyFunction<R = unknown> = (..._args: unknown[]) => R;

/**
 * Function `cached` allows you to save the result of a executed function in a new promise.
 * Used to reduce calls to NASA api.
 */
export async function cached<R, K>(key: K | AnyFunction<K>, callback: AnyFunction<R>): Promise<R> {
  const parsed_key = key instanceof Function ? key() : key;
  if (cache.has(parsed_key)) {
    await sleep(250);
    return cache.get(parsed_key) as R | Promise<R>;
  }
  const result = callback();
  cache.set(parsed_key, result);
  return result;
}
