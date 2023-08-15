const repeatString = function(string, num) {
  let result = '';

  if (num < 0){
    return 'ERROR';
  }

  if (string === ''){
    break;
  }
  for (let i = 0; i < num; i++){
    result = result + string;
  }
  
  return result;
}
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
