evenOrOdd(10)

function evenOrOdd(limit) {
  for (let index = 0; index < limit; index++) {
    console.log(index % 2 === 0 ? "EVEN" : "ODD");
  }
}
