import { isNull } from "lodash";
import { Context, useContext } from "react";

export function useCtx<T>(context: Context<T | null>, name: string) {
  let ctx = useContext(context);
  if (isNull(ctx))
    throw new Error(`You forgot to wrap app inside of ${name}Provider.`);
  return ctx;
}
