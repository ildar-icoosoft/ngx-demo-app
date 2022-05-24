export function EndOfAction(actionType: string) {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'triggeredAction', {
      value: actionType,
    });
  };
}
