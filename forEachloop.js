// forEach Loop -  call back
// it is an array method

// normal function synatx

let array = [11, 20, 33, 40, 55, 60, 77, 100];
let newData  =0 ;

// array.forEach(function value(val){
// console.log(val)
// })

// arrow functionn
// array.forEach((val) =>{
//     console.log(val*2)
// }) 

// map function

// 
array.filter((val) => {
    if (val % 2 === 0) {
        newData = val;
    }
    console.log(newData)
})

//explore following :
//document model object explore
// reduce method
// dom 
// call back 