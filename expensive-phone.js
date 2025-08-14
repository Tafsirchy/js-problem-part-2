const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Xaomi', price: 18000, camera: '20mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '50mp', color: 'black'},
    {name: 'Iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '120mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '18mp', color: 'black'},
]

function getExpensivePhone (phones) {

    let expensive = phones[0];
    // console.log(phones);
    for(const phone of phones){
        // console.log(phone);
        if (phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}

const expen = getExpensivePhone(mobiles);
console.log('Expensive phone is: ',expen);