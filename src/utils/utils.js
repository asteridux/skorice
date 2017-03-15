import typeDetect from 'type-detect';

export function propLike(template, testObj, key) {
  return testObj.hasOwnProperty(key);
}

export function buildErrorPath(errArr) {
  return errArr.reduce((errorPath, errStep) => {
    var { key, parentType } = errStep;

    if (parentType === 'Array' || key.match(/\W/)) {
      errorPath += `[${key}]`;
      return `${errorPath}[${key}]`;
    } else if (parentType === 'Object') {
      return `${errorPath}.key`;
    }
  }, '');
}

export function basicType(item) {
  return typeDetect(item);
}
