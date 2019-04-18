var isOneEditDistance = function(s, t) {
  let [i, j] = [0, 0]
  while (i < s.length || j < t.length) {
    if (s[i] !== t[j]) {
      return s.substring(i) === t.substring(j + 1) // insert
        || s.substring(i + 1) === t.substring(j) // delete
        || s.substring(i + 1) === t.substring(j + 1) // update
    }
    i++;
    j++;
  }

  return false
};