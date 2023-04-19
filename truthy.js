//If the input value is truthy, print true. 
// If the input value is falsy, print the corresponding result.
    // "The boolean value false is falsy";
    // "The null value is falsy";
    // "undefined value is falsy";
    // "The number 0 is falsy(the only falsy number);"
    // "The empty string is falsy(the only falsy string);"

let value = false;

if (value) {
    console.log("True");
} else if (value === false) {
    console.log("The boolean value false is falsy");
} else if (value === null) {
    console.log("The null value is falsy");
} else if (value === undefined) { 
    console.log("undefined value is falsy");
    } else if (value === 0) {
        console.log("The number 0 is falsy(the only falsy number)");
    } else if (value === "") {
        console.log("The empty string is falsy(the only falsy string)");
    } else {
        console.log(value);
    }

