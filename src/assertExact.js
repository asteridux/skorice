import { assertLike } from './assertLike';

export function assertExact(template, testObj) {
  assertLike(template, testObj);
  assertLike(testObj, template);
}
