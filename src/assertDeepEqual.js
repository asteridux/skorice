import deepEql from 'deep-eql';

export function assertDeepEqual(leftObj, rightObj) {
  return deepEql(leftObj, rightObj);
}
