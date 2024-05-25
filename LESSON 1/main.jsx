//FOR HOISTING
// console.log(typescript3);
// var typescript1 = 'test';
// let typescript2 = 'test';
// const typescript3 = 'test';

//GLOBAL SCOPE WITH HOISTING ISSUE!
// function typescript(){
//     console.log("MASTER COURSE!");
// }
// typescript();



//FUNCTION BLOCK SCOPE 
if(true){
    var typescript = 'typescript';
    //result is true;
    
    // let typescript = 'typescript';
    //result is Uncaught SyntaxError: Identifier 'typescript' has already been declared (at main.jsx:17:9)

    // const typescript = 'typescript';
    //result is ReferenceError: typescript is not defined at main.jsx:27:13
}

// console.log(typescript);


//FUNCTION REFACTORY SYNTAX
// for(let ez = 0; ez < 3; ez++){
//     (function test(o){
//         alert(o);
//     })(ez)
// }


//PRIMITIVE TYPES VALUES   
let firstNumber = 100;
let copyFirstNumber = firstNumber;
firstNumber = 1000;

console.log("TEST 1",firstNumber);
console.log("TEST 2", copyFirstNumber);


//REFERENCE TYPES VALUES
let firstArray = [1];
let copyFirstArray = firstArray;
copyFirstArray.push(2);

console.log("ARRAY 1", firstArray);
console.log("ARRAY 2", copyFirstArray);


//PREMITIVE TYPES WITH OBJECTS

let personalDetails  = { 
    firstname: 'mark',
    lastname: 'bello',
    age: '25'
};
let bioData = personalDetails;
personalDetails.work = 'tig lung-ag';

console.log(bioData);