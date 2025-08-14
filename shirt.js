/**
 * shirt price --> 500
 * pant price --> 800
 * shoes price --> 1000
 */

function totalCost (shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 800;
    const shoePrice = 1000;

    const totalShirtPrice = shirtPrice * shirtQuantity;

    const totalPantPrice = pantPrice * pantQuantity;

    const totalShoePrice = shoePrice * shoeQuantity;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;

}

const total = totalCost(4, 2, 1);

console.log(total);