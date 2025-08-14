/**
 * first 100 ---> 100
 * 101 to 200 ---> 90
 * above 200 ---> 70
 */


function layeredDiscountedTotal (quantity){
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;

    if(quantity <= 100){
        const total = quantity * first100price;
        return total;
    }
    else if (quantity <= 200){
        const first100Total =  100 * first100price;
        const remainingQuantity = quantity - 100;
        // const total = first100Total + (remainingQuantity * second100price);
        const remainingTotal = remainingQuantity * second100price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total =  100 * first100price;
        const second100Total = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }

}

const total = layeredDiscountedTotal(250);
console.log(total);