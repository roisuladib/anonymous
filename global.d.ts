export {};

declare global {
  interface Children {
    children: React.ReactNode;
  }
  interface ClassName {
    className?: string;
  }
  interface Params<T extends Record<string, string | string[]>> {
    params: Promise<T>;
  }
  interface SearchParams<T extends Record<string, any>> {
    searchParams: Promise<T>;
  }
}
