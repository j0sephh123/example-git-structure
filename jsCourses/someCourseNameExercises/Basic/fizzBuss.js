function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }

  if (input % 3 === 0) {
    return "Fizz";
  }

  if (input % 5 === 0) {
    return "Buzz";
  }

  if (typeof input !== "number") {
    return "Not a Number";
  }

  return input;
}

console.log(fizzBuzz(7));
