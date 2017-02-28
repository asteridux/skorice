import { objectWalker } from './utils/objectWalker';
import { propLike } from './utils/utils';

export function assertLike(template, testObj) {
  var comparison = objectWalker(template, testObj, comparer);

  if (!comparison) {
    throw new Error('Objects do not match at');
  }

  return true;
}
