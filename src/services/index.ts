const MOCKS_ENABLED = true;

export function mocksEnabled() {
  return MOCKS_ENABLED && process.env.NODE_ENV !== 'production';
}
