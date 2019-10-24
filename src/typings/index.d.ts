export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchJSC(data: object): R;
    }
  }
}
