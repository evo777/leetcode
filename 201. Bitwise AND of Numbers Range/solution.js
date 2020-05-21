var rangeBitwiseAnd = function (m, n) {
  return n > m ? rangeBitwiseAnd(m >> 1, n >> 1) << 1 : m;
};
