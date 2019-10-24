export const pipe = (...fn: Function[]) => (v: any = undefined) => {
  fn.reduce((_v, f) => {
    return f(_v);
  }, v);
};
