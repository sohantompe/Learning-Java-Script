// keywords

// var keywords is global. it can access or used thorughout the code. it can redeclarable
// Eg :
 
    var name ;
    name = "Sohan"; 
console.log ("My name is ",name);


// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

{
    let age = 25;
    console.log ("My age is",age)
}

//const
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

const PI = 3.141592653589793;
console.log (PI)