import { objectWalker } from './utils/objectWalker';
import { propLike, buildErrorPath } from './utils/utils';

export function assertLike(template, testObj, logger = () =>{}) {
  var comparison = objectWalker(template, testObj, propLike);

  if (comparison.length) {
    throw new Error(`Objects do not match at ${buildErrorPath(comparison)}`);
  }

  return true;
}
