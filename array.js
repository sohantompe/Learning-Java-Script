/*     Array Methods in JS
       Array : array is a collection of data     */

let array1 = [10, 20, 30, 40, 50]
let array2 = [60, 70, 80, 90, 100]

/* To print complete array :  */ 
// console.log(array1)    
// output -  [10, 20, 30, 40, 50]               


/*  Array length - To print array length :  */
//  let size = array1.length
//  console.log(size)                       
//  output - 5

/* Array toString() 
 The JavaScript method toString() converts an array to a string of (comma separated) array values.  */
// let arr = array1.toString()
// console.log(arr)
// output - 10,20,30,40,50

/*  Array at()
  To access perticular element of array by index  */
// let num = array1.at(2)
// console.log(num)
// output - 30

/*  Array join()
  The join() method also joins all array elements into a string.
  It behaves just like toString(), but in addition you can specify the separator  */
// let arr = array1.join(" * ")
// console.log(arr)
// output -  10 * 20 * 30 * 40 * 50


/* push and pop : changes occurr in same array
   push - add to last
   pop - delete from end
   unshift - add to start
   shift - delet from start */

/*  Array pop()
    The pop() method removes the last element from an array:
    pop - delet from end  */
// array1.pop()
// console.log(array1)
// output - [10, 20, 30, 40]

/* Array push()
 push - add to last
 The push() method adds a new element to an array (at the end):  */
// array1.push(99)
// console.log(array1)
// output -  [10, 20, 30, 40, 50, 99]

/* Array shift()
 The shift() method removes the first array element and "shifts" all other elements to a lower index.
 shift - delete from start  */
// array1.shift()
// console.log(array1)
// optput - [20, 30, 40, 50]

/* Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
unshift - add to start */
// array1.unshift(99)
// console.log(array1)
// output - [99, 10, 20, 30, 40, 50]

/* delete()
Using delete() leaves undefined holes in the array.
Use pop() or shift() instead. */
// delete array1[1]
// console.log(array1)
// output - [10, empty, 30, 40, 50]

/* Array concat()
The concat() method creates a new array by merging (concatenating) existing arrays:
The concat() method does not change the existing arrays. It always returns a new array. 
Use to join two arrays */
// let str1 = ["One", "Two", "Three"]
// let str2 = ["Four", "Five"]
// console.log(str1.concat(str2))
// output -['One', 'Two', 'Three', 'Four', 'Five']


/* copyWithin()
The copyWithin() method copies array elements to another position in an array:  */
// array1.copyWithin(2,0)                //Copy to index 2, all elements from index 0
// console.log(array1) 
// output - [10, 20, 10, 20, 30]

// array1.copyWithin(2,0,2)                //Copy to index 2, the elements from index 0 to 2
// console.log(array1) 
// output - [10, 20, 10, 20, 50]

/*  Array flat()
The flat() method creates a new array with sub-array elements concatenated to a specified depth.  */
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat()
// console.log(newArr)
// output - [1, 2, 3, 4, 5, 6]

/*  Array splice()
The splice() method can be used to add new items to an array  
 Syntax for Splice : splice(add, remove, replace)  */
// array1.splice(0,1,99)
// console.log(array1)
// output - [99, 20, 30, 40, 50]

/*   Array slice()
The slice() method slices out a piece of an array into a new array 
It cut the array from given index and make new array */
let newArr = array1.slice(1)
console.log(newArr)
output -  [20, 30, 40, 50]