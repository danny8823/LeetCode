// // * params {array}

// //  * NAIVE solution. avoid nested for loops
// //  * 
// function sumZero1(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log('i,j', i , j)
//             if(arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }


// // * REFACTORED 
// // * TIME: O(N)
// // * SPACE: O(1)

// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1
//     console.log(right)
//     while(left < right) {
//         let sum = arr[left] + arr[right]
//         if(sum === 0) {
//             return [arr[left], arr[right]]
//         } else if(sum > 0){
//             right--;
//         } else {
//             left++;
//         }
//     }
// }
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

// * countUniqueValues
// * params {array}
// * counts unique values
function countUniqueValues(arr) {
    let pointer1 = 0
    let pointer2 = 1
    let counter = 1
    while(pointer2 < arr.length) {
        if(arr[pointer1] === arr[pointer2]) {
            pointer1 = pointer2
            pointer2++
        } else {
            pointer1++ 
            pointer2++
            counter++
        }
    }
    return counter
}

let array_1 = [1,1,1,1,1,2,2,22,5,8]
console.log(countUniqueValues(array_1))