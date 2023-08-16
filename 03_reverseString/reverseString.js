const reverseString = function(string) {
  if (string === ''){
    return '';
  }
  let arr = [];
  
  for (let i = 0; i < string.length; i++) {
    arr = string[i] + arr;
  }

  return arr;
};

// Do not edit below this line
module.exports = reverseString;
