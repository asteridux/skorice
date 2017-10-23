import { assertLike } from './assertLike';

export function assertExact(template, testObj) {
  return assertLike(template, testObj) && assertLike(testObj, template);
}
