//      * @param {string} str1
//      * @param {string} str2
//      * @return {boolean}
//      */  

//      * does str2 have all the letters of str1
function validAnagram(str1,str2) {
    console.log(str1.length)
    let str1Count = {}
    let str2Count = {}
    for(let letter of str1) {
        str1Count[letter] = (str1Count[letter] || 0) + 1
    }
    for(let letter of str2) {
        str2Count[letter] = (str2Count[letter] || 0) + 1
    }
    console.log(str1Count)
    console.log(str2Count)

    for(let key in str1Count) {
        if(key in str2Count) {
            return true
        } else {
            return false
        }
    }
}

console.log(validAnagram('hello', 'ohlel'))