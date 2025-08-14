function multiply (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    return num1 * num2;
}

const result = multiply(5, 'seven');

// console.log(result);

function fullName ( firstName, lastName) {
    if(typeof firstName !== 'string'){
        return 'First name must be a string';
    }
    else if(typeof lastName !== 'string'){
        return 'Last name must be a string';
    }
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const full = fullName('Tafsir', 'Chy');
// console.log(full);

function getPrice (products){
    // console.log(typeof products);
    if(typeof products !== 'object'){
        return 'Please provide an object'
    }
    else if(!products.price){
        return 'Please provide a price';
    }
    const price = products.price;
    return price;
}

const price = getPrice({name: 'Chulkanir molom', price: 50, color: 'yellow'});
// const price = getPrice(5);

// console.log(price);

function getSecond(numbers){
    // console.log(typeof numbers);
    // console.log(Array.isArray(numbers))
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([5, 7, 9, 10]);
console.log(second);