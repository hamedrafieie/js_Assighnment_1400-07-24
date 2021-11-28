let myInt = 235345;
let myFunc = num => Number(num);
let intArr = Array.from(String(myInt), myFunc);
console.log(intArr);

function PrintNtimes (digit){
    let myObj = {}
    myObj[`${digit}`] = ''
    for (let i = 0 ; i < digit ; i++){
        myObj[`${digit}`] += String(digit)
    }
    return myObj;
}

let printed =  intArr.map(PrintNtimes)
console.log(printed)

