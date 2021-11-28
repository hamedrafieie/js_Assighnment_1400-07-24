let FirsArr = [1,2,3,4,5]
let SecondArr = [3,5]
FirsArr = FirsArr.filter(val => !SecondArr.includes(val));
console.log(FirsArr)
