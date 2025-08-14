const products = [
    {name: 'laptop', price: 50000, color: 'silver'},
    {name: 'mobile', price: 20000, color: 'black'},
    {name: 'watch', price: 3000, color: 'black'},
    {name: 'headphone', price: 500, color: 'black'},
    {name: 'camera', price: 5000, color: 'black'},
]

function getTotal (items){
    let sum = 0;
    for (const item of items){
        sum = sum += item.price;
    }
    return sum;
}

const total = getTotal(products);
console.log('Total cost: ',total);