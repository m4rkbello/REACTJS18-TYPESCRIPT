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