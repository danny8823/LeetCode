// ! Function called same
// ! Accepts 2 arrays
// ! return true if every index of second array 
// ! Frequency of values must be same

// ? AVOID nested loops if possibly 
// let = o(n)*2
// function same(arr1,arr2) {
//     // * IF LENGTH IS DIFF, return false
//     if(arr1.length !==  arr2.length) {
//         return false;
//     }
//     // * LOOP through
//     for(let i = 0; i < arr1.length; i++) {
//         console.log('i ====>', arr1[i])
//         // * search arr2 and return index of arr2 where index of arr1 is squared
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         console.log('arr2 idx',correctIndex)
//         // * If there is none, it will return -1 for no index with that number then return false
//         if(correctIndex === -1) {
//             return false;
//         }
//         // * Splice or cut the number from arr2
//         console.log(arr2)
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }

// console.log(same([3,1,2,4],[1,16,9,4]))

// let = o(n)

function same(arr1, arr2){
    // * IF length is different false
    if(arr1.length !== arr2.length){
        return false;
    }
    // * Counters
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // * Loop through num of each index in arr1
    for(let val of arr1){
        // * if it val occurs again it adds to counter instead of adding it again to dictionary
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // * Loop through num of each index in arr2
    for(let val of arr2){
        // * if it val occurs again it adds to counter instead of adding it again to dictionary
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,25]))
