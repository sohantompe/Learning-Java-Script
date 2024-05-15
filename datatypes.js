// // DATATYPES
// // Premitive datatypes (7)

// // numbers
// let age = 21;
// console.log (age,typeof(age))

// //string 
// let name = "Sohan ";
// console.log (name, typeof(name))

// //boolean 
// let isFollow = true;
// console.log(isFollow, typeof(isFollow))

// //undefined
// let marks  ;
// console.log(marks, typeof(marks))

// //null 
// let xyz = null ;
// console.log(xyz, typeof(xyz))

// //bigInt
// let salary = BigInt(100000000000);
// console.log (salary, typeof (salary))

// //symbol
// const mySymbol = Symbol(age);
// console.log(mySymbol);



// // Non-Premitive data types (1)
// // >object : function and arrays

// const employee = {
//     name : 'Sohan Tompe',
//     salary : 10000000,
//     age : 21,
//     jobTile : 'WebDeveloper' ,
// }
// console.log (employee, typeof(employee));
// console.log(employee.age)




const book = {
    image : "images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authore :"Sohan",
    rating : 4.5,
    price : 340 ,
}

book.authore = "akash";


book.rating = 4.9;
book.price = book.price + 10;
console.log(book );