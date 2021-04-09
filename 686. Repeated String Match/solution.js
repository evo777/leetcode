var repeatedStringMatch = function (a, b) {
  let str = '';
  let result = 0;

  while (str.length <= (a.length + b.length)) {
    str += a;
    result++;

    if (str.includes(b)) {
      return result;
    }
  }

  return -1;
};