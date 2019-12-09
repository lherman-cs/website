import { Result } from "model/result";

/*
   pending
   /     \
success  error
*/
export type AsyncState<P, S, E> = { status: "pending"; data: P } | Result<S, E>;
