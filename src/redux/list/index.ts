import { Draft, createSlice } from "@reduxjs/toolkit";
import { includes, indexOf, map } from "lodash";
import { INewList, IPayload } from "../../types/redux/common";

export default function newList<T, N extends string, K extends keyof Draft<T>>({
  initialState,
  name,
  key,
}: INewList<T, N, K>) {
  type DT = Draft<T>;
  return createSlice({
    initialState,
    name,
    reducers: {
      add(state, { payload }: IPayload<DT>) {
        let keys = map(state.data, (i) => i[key]);
        if (!includes(keys, payload[key])) state.data.push(payload);
      },
      updateViaCurrent(state) {
        let keys = map(state.data, (i) => i[key]);
        let index = indexOf(keys, state.current[key]);
        state.data[index] = state.current;
      },
      updateCurrent(state, { payload }: IPayload<Partial<Omit<DT, K>>>) {
        state.current = { ...state.current, ...payload };
      },
      updateCurrentViaKey(state, { payload }: IPayload<DT[K]>) {
        let keys = map(state.data, (i) => i[key]);
        if (includes(keys, payload)) {
          let index = indexOf(keys, payload);
          state.current = state.data[index];
        }
      },
    },
  });
}
