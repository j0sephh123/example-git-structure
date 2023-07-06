let obj1 = new EqualityTest('a', 'b')
let obj2 = new EqualityTest('a', 'b')

console.log(areEqual(obj1, obj2));
console.log(areSame(obj1, obj2));

function EqualityTest(street, zipCode) {
    this.street = street;
    this.zipCode = zipCode;
}

function areEqual(obj1, obj2) {
    return obj1.street === obj2.street &&
    obj1.zipCode === obj2.zipCode;
}

function areSame(obj1, obj2) {
    return obj1 === obj2;
}