const removeFromArray = function(array, num) {
  let arr_result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === num) {
      continue;
    } else {
      arr_result.push(i)
    }
  }
return arr_result;
};

// Do not edit below this line
module.exports = removeFromArray;
