var groupAnagrams = function (strs) {
  const hash = {};
  const result = [];
  const sortedArr = strs.map(string => string.split("").sort().join(""));

  for (let i = 0; i < sortedArr.length; i++) {
    if (!hash[sortedArr[i]]) {
      hash[sortedArr[i]] = [strs[i]];
    } else {
      hash[sortedArr[i]].push(strs[i]);
    }
  }

  for (let key in hash) {
    result.push(hash[key]);
  }

  return result;
};