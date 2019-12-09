export type Result<S, E> =
  | { status: "success"; data: S }
  | { status: "error"; data: E };
