var firstUniqChar = function(s) {
  //Write code here
  var obj = {};

  //Makes the character into keys and the occurrence the values
  for(var i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  //Loop to check which character first has a value of 1 (a unique character)
  for(var j = 0; j < s.length; j++) {
    if (obj[s[j]] === 1) {
      return s.indexOf(s[j]);
    }
  }

  //If no unique character
  return -1;
};