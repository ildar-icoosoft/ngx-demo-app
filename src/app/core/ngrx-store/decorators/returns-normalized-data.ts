export function ReturnsNormalizedData() {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'containsNormalizedData', {
      value: true,
    });
  };
}
