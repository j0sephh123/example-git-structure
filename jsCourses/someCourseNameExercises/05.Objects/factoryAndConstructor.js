let address = Create("Sredna gora", "Karlovo", "4300");

//Factory
function Create(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

console.log(address);

//Constructor

let address2 = new Address("VIA Street", "Plovdiv", "7777");

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(address2);
