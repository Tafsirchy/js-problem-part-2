function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === '+'){
        const result = add(a, b);
        return result;
    }

    else if(operation === '-'){
        const result = subtract(a, b);
        return result;
    }

    else if(operation === '*'){
        const result = multiply(a, b);
        return result;
    }

    else if(operation === '/'){
        const result = divide(a, b);
        return result;
    }
    else{
        return 'Invalid operation. Only add, sub, mul, div are allowed';
    }
}

const result = calculator(5, 2, '*');
console.log(result);