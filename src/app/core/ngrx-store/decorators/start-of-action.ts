export function StartOfAction() {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'actionIsStarted', {
      value: true,
    });
  };
}
