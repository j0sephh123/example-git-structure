//factory function
let newFactoryFunction = factoryF('input');

function factoryF(input) {
    return {
        input,
        draw() {
            console.log('factory function');
        }
    }
}

//constructor function
let newConstructorFunction = new ConstructorFunction('input');
function ConstructorFunction(input) {
    this.input = input;

    function draw(input) {
        console.log('factory function');
    }
}