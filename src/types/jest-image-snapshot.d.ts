declare module 'jest-image-snapshot' {
  export function toMatchImageSnapshot(options?: string): string;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(options?: string): R;
    }
  }
}
