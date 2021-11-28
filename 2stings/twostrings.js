const strings = (str1 , str2) => {

    for (let i = 0 ; i <= str1.length - str2.length ; i++) {
        let temp = str1.substr(i , str2.length);
        if (temp === str2) {
            return i;
        }
    }
    return -1
}

console.log(strings('seiboob' , 'ib'))