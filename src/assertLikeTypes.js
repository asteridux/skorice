import typeDetect from 'type-detect';

import { objectWalker } from './utils/objectWalker';
import { propLike } from './utils/utils';

export function testType(template, testObj, key) {
  return testObj.hasOwnProperty(key) && type(template[key]) === type(testObj[key]);
}
export function assertLikeTypes(template, testObj) {
  var result = objectWalker(template, testObj, testType);

  if (!result) {
    throw new Error('Objects do not match at ')
  }

  return true;
}
