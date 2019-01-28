// restate the problems
// build object to explain each number of first number's frequency and compare
// lets use concrete exmaple
// solve, or simplify
// refactor

function sameFrequency(num1, num2){
  const firstNumFreq = {};
  const secondNumFreq = {};
  num1.toString().split('').forEach((numItem) => {
    if (firstNumFreq[numItem]) {
      firstNumFreq[numItem] += 1;
      return;
    }

    firstNumFreq[numItem] = 1;
  });

  num2.toString().split('').forEach((numItem) => {
    if (secondNumFreq[numItem]) {
      secondNumFreq[numItem] += 1;
      return;
    }

    secondNumFreq[numItem] = 1;
  });


  const result = Object.keys(firstNumFreq).every((key) => firstNumFreq[key] === secondNumFreq[key]);
  console.log(result);
  return result;
}


sameFrequency(182, 821); // true