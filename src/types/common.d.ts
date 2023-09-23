import { Dispatch, ReactNode, SetStateAction } from "react";
export type TKey = string | number;
export type TWorkletFn<T> = (...args: T[]) => T;
export type TDimensionValue = number | `${number}%`;
export type TScheme = "dark" | "light";
export interface IId {
  id: TKey;
}
export interface IName {
  name: string;
}
export interface IUri {
  uri: string;
}
export interface IChildren {
  children?: ReactNode;
}
export interface IColors<T> {
  colors: T;
}
export type TColors<T> = Partial<IColors<T>>;
export interface IMode<T> {
  mode: T;
}
export type TMode<T> = Partial<IMode<T>>;
export type TSetState<T> = Dispatch<SetStateAction<T>>;
/**
 * or undefined
 */
export type OU<T> = T | undefined;
export type OUs = OU<string>;
