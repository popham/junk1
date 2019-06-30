/* @flow */

/* Flow doesn't complain about this value import of a type export, so runtime
   shenanigans ensue. */
import { F1 } from "./f2";

const k = new F1();
