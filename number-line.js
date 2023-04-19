//If the sum is less than -1000, print "is less than -1000";
// If the sum is a negative number, print "is a negative number";
// if the sum is equal to 0, print "is equal to 0";
// if the sum is larger than 0, print "is larger than 0";
// if the sum is greater than 100, print "is greater than 100";

let num1 = -5;

let num2 = 0;

let sum = num1 + num2;

  if (sum < -1000) {
    console.log(sum + " is less than -1000");
  } else if (sum < 0) {
    console.log(sum + " is a negative number");
  } else if (sum === 0) {
    console.log(sum + " is equal to 0");
  } else if (sum > 0) {
    console.log(sum + " is larger than 0");
  } else if (sum > 100) {
    console.log(sum + " is greater than 100");
  } else {
    console.log(sum + " is not a number");
  }