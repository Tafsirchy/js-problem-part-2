/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood;
    // console.log(totalChairWood);
    // return totalChairWood;

    const totalTableWood = tableQuantity * perTableWood;
    // console.log(totalTableWood);
    // return totalTableWood;

    const totalBedWood = bedQuantity * perBedWood;
    // console.log(totalBedWood);
    // return totalBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    // console.log(totalWood);
    return totalWood;

}

// woodCalculator(2, 1, 3);
const wood = woodCalculator(6, 1, 4);
console.log(wood);