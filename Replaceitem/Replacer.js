function Replace  (arr, index, offset)  {
    let temp = arr[index]
    arr.splice(index , 1)
    arr.splice(index+offset , 0 , temp)
    return arr
}

console.log(Replace(['ali','karim','mammad','saeid',',mohsen'] , 3 , -2))
