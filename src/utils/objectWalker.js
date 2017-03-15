import { basicType } from './utils';

export function objectWalker(template, testObj, comparer) {
  var templateKeys = Object.keys(template);
  var error = [];

  templateKeys.forEach((key) => {
    if (comparer(template, testObj, key)) {
      var recursive = objectWalker(template[key], testObj[key], comparer);

      if (!recursive) {
        error = [...error, {
          key,
          parentType: basicType(template)
        }, ...recursive];

        return false;
      }
    } else {
      error.push({
        key,
        parentType: basicType(template)
      });

      return false;
    }
  });

  if (error && error.length > 0) {
    return error;
  }

  return true;
}
