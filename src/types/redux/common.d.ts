import { IState } from "./list";
export interface IPayload<T> {
  payload: T;
}
export interface INewList<T, N extends string, K> {
  initialState: IState<T>;
  name: N;
  key: K;
}
