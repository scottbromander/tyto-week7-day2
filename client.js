const dog = {
    name: 'baxter',
    breed: 'french bulldog',
}

const anotherDog = {
    name: 'moxie',
    breed: 'french bulldog',
}

console.log(dog.name);
console.log(dog['breed']);

dog.siblings = [anotherDog];
console.log(dog);

const fruits = ['apple', 'banana', 'orange'];

const market = {};

for (let i = 0; i < fruits.length; i++) {
    market[fruits[i]] = {
        name: fruits[i],
        price: 1
    };
}

console.log(market);