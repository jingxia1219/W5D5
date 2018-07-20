const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, callback) {
  let currentSum = sum;

  if (numsLeft === 0) {
    callback(currentSum);
    return;
  }

  if (numsLeft > 0 ) {
    reader.question("Enter a number:", function (answer) {
      currentSum = (currentSum + parseInt(answer));
      console.log(currentSum);
      addNumbers(currentSum, numsLeft -1, callback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
