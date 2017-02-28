export function objectWalker(template, testObj, comparer) {
  var templateKeys = Object.keys(template);
  var error = [];

  templateKeys.forEach((key) => {
    if (comparer(template, testObj, key)) {
      var recursive = objectWalker(template[key], testObj[key]);

      if (!recursive) {
        error = [...error, key, ...recursive];

        return false;
      }
    } else {
      error.push(key);

      return false;
    }
  });

  if (error && error.length > 0) {
    return error;
  }

  return true;
}
