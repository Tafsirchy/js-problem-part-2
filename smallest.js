const heights = [65, 66, 68, 72, 78, 60, 61, 71];

function getMin (numbers) {
    // console.log(numbers);

    let min = numbers[0];

    for( const number of numbers) {

        if(number < min){
            min = number;
        }

    }
    return min;
}

const tallest = getMin(heights);
console.log('Min height is: ', tallest);
