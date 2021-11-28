let n = 5;
let square = "";

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(i === 0 || i === n - 1) {
            square += "*";
        }
        else {
            if(j === 0 || j === n - 1) {
                square += "*";
            }
            else {
                square += " ";
            }
        }
    }
    square += "\n";
}
console.log(square);