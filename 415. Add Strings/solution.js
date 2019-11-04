const addStrings = (string1, string2) => {
  let result = "";
  let stringLeft1 = string1.length - 1;
  let stringLeft2 = string2.length - 1;
  let carry = 0;

  while (stringLeft1 >= 0 || stringLeft2 >= 0 || carry > 0) {
    let digit = carry;
    digit += (parseInt(string1[stringLeft1]) || 0);
    digit += (parseInt(string2[stringLeft2]) || 0);

    result = (digit % 10).toString().concat(result);
    carry = Math.floor(digit / 10);

    stringLeft1--;
    stringLeft2--;
  }

  return result.length === 0 ? '0' : result;
};