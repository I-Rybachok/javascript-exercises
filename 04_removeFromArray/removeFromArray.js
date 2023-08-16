const removeFromArray = function(arr, ...num) {
  let arr_result = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < num.length; j++){
      if (arr[i] === num[j]) {
        continue;
      } else {
        arr_result.push(arr[i]);
      }
    }
  }
return arr_result;
};

// Do not edit below this line
module.exports = removeFromArray;
