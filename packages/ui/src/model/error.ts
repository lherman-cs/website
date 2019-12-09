export interface Error {
  reason: string;
}

export interface HTTPError extends Error {
  code: number;
}
