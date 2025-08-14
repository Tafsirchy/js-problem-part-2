const products = [
    {name: 'mobile', price: 20000, quantity: 2 },
    {name: 'watch', price: 3000, quantity: 3 },
    {name: 'headphone', price: 500, quantity: 5 },
    {name: 'camera', price: 5000, quantity: 1 },
    {name: 'laptop', price: 50000, quantity: 1 },
]

function shoppingCart (items) {

    let total = 0;
    for( const item of items){
        // console.log(item)
        const thisItemCost = item.price * item.quantity;
        // total = total + item.price * item.quantity;
        total = total + thisItemCost;
    }

    return total;
}

const cart = shoppingCart(products);
console.log(cart);