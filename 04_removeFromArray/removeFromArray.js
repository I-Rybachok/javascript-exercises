const removeFromArray = function(arr, num) {
  let arr_result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      continue;
    } else {
      arr_result.push(arr[i])
    }
  }
return arr_result;
};

// Do not edit below this line
module.exports = removeFromArray;
