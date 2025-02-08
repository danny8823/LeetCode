// arr = [10,0,20,1,5,7]

// function test(arr) {
//     setTimeout(() => {
//         return console.log(...arr)
//     }, 1000)
// }


// test(arr)
// // function hi() {
// //     for(let i = 0; i<= 5; i++) {
// //         console.log(i)
// //     }
// // }

// // hi()

// function removeDuplicates(nums) {
//     const unique = Array.from(new Set(nums)).sort((a, b) => a - b);
//     for (let i = 0; i < unique.length; i++) {
//         nums[i] = unique[i];
//     }
//     return unique.length;
// }

// console.log(removeDuplicates(arr))
let arr = [3,2,2,3]

function removeDuplicates(nums) {
    // * Left pointer starts at index of 1 so does right pointer
    let l = 1;
    // * For loop
    for (let r = 1; r < nums.length; r++) {
        // * compare right pointer with previous value 
        // * if they are the same left pointer stays while right pointer continues to iterate
        if (nums[r] !== nums[r - 1]) {
            // * If they are not the same that means its the first time seeing that number. So we move the new number to where the left pointer was at
            nums[l++] = nums[r];
        }
    }
    return l;
}

var removeElement = function(nums, val) {
    // * POINTER 1
    let k = 0
    // * POINTER 2
    for(let i = 0; i < nums.length; i++) {
        // * DOES nums[i] not equal to value? If this is true, pointer 2 takes place of pointer 1
        if(nums[i] !== val) {
            // *the index before num[i] will get replaced by nums[k++]
            nums[k++] = nums[i]
            console.log('k', k, 'i', nums[i], nums)
        }
        // * If nums[i] is equal to value k pointer remains and i pointer iterates
    }

    return k
};

// let word1 = 'he'
// let word2 = 'good'
// var mergeAlternately = function(word1, word2) {
//     let k = 0
//     let newStr = '' 
//     if(word1.length > word2.length) {
//         for(let i = 0; i < word1.length; i++) {
//             newStr += word1[i] + word2[k]
//             k++
//         }
//     } else {
//         for(let i = 0; i < word2.length; i++) {
//             newStr += word1[i] + word2[k]
            
//             k++
//             if(word1[i] === 'undefined')
//         }
//     }
    
//     console.log(newStr)

//     // if(word1.length < word2.length) {
//     //     let difference = word1.length - word2.length
//     //     console.log(difference, k)
//     // }

//     // console.log(newStr)

// };

// mergeAlternately(word1,word2)
// let array = [1,2,3,6,5,4,1]
// var getConcatenation = function(nums) {
//     let newArr = []
//     for(let i = 0; i < nums.length; i++) {
//         newArr[i] = nums[i] 
//         newArr[i + nums.length] = nums[i]
        
//     }

//     return newArr
// };

// getConcatenation(array)


// function isValid(s) {
//     //  ? THE STACK.
//     const stack = [];
//     // ? THE MAP
//     const closeToOpen = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     };
//     // ? LOOP THROUGH EVERY Char in the Str
//     for (let c of s) {
//         // ? If closing character 
//         if (closeToOpen[c]) {
//             // ? If it the lenght of stack is greater than 0 and the last item in array is equal to character in map
//             if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
//                 // ? Then pop it
//                 stack.pop();
//             // ? IF the lenght is 0 and the char does not equal to closing char then end loop
//             } else {
//                 return false;
//             }
//         // ? If its an open char push to stack.
//         } else {
//             stack.push(c);
//         }
//     } 
//     // ? If the stack is 0 then all char match with its counterpart
//     return stack.length === 0;
//     }
        

    

// console.log(isValid('{}{}{}'))

// // const hashmap = {
// //     "(":")",
// //     "{":"}",
// //     "[":"]"
// // }

// // console.log(hashmap[")"])

// class MinStack {
//     constructor() {
//         this.stack = [];
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     push(val) {
//         return this.stack.push(val)
//     }

//     /**
//      * @return {void}
//      */
//     pop() {
//         this.stack.pop()
//     }

//     /**
//      * @return {number}
//      */
//     top() {
//         return this.stack[this.stack.length - 1]
//     }

//     /**
//      * @return {number}
//      */
//     getMin() {
//         const tmp = [];
//         let mini = this.stack[this.stack.length - 1];

//         while (this.stack.length > 0) {
//             mini = Math.min(mini, this.stack[this.stack.length - 1]);
//             tmp.push(this.stack.pop());
//         }

//         while (tmp.length > 0) {
//             this.stack.push(tmp.pop());
//         }

//         return mini;
//     }
// }

class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = 0
        this.stack = []
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {}

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {}

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {}

    /**
     * @returns {number}
     */
    popback() {}

    /**
     * @returns {void}
     */
    resize() {}

    /**
     * @returns {number}
     */
    getSize() {}

    /**
     * @returns {number}
     */
    getCapacity() {}
}
