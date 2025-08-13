const jim = 156;
const tim = 89;
const kim = 98;

const maximum = Math.max(jim, tim, kim);
console.log(maximum);

if(jim > tim && jim > kim){
    console.log('Jim is the ultimate BOSS');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the ultimate BOSS');
}
else{
    console.log('Kim is the kardashians BOSS');
}

function BiggerNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const maxNumber = BiggerNumber(1456, 389, 2198);
console.log(maxNumber);