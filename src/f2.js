/* @flow */

/* Only export the type part of `F1`. Babel will strip this type export, so any
   value imports of `F1` from this file will go unfulfilled at runtime. */
export type { F1 } from "./f1";
