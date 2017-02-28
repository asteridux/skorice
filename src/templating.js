import { assertExact } from './assertExact';
import { assertLike } from './assertLike';

export function templateLike(template) {
  return (testObj) => assertLike(template, testObj);
}

export function templateExact(template) {
  return (testObj) => assertExact(template, testObj);
}
