function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('gib'))
console.log(reverseString('seiboob'))
