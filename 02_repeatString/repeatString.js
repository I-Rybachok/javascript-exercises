// const repeatString = function(string, num) {
//   let result = '';

//   if (num < 0){
//     return 'ERROR';
//   }

//   if (string === ''){
//     break;
//   }
//   for (let i = 0; i < num; i++){
//     result = result + string;
//   }
  
//   return result;
// }
// repeatString('hey', 3);

const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
