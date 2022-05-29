import { ActionStatus } from './action-status';

// копия внутреннего интерфейса из ngxs
export interface ActionContext<T = any> {
  status: ActionStatus;
  action: T;
  error?: Error;
}
