// goal: switch the values of the variables myApples and Your Apples.

//Algorithm 1 (incorrect let variables cannot be redeclared :/)
// re-define the variable yourApples to Subtract 6 from itself, written as let yourApples = yourApples minus 6
// re-define the variable myApples to add 6 to myApples, written as let myApples = myApples + 6 

let myApples = 5
let yourApples = 11

// let myApples = myApples += 6
// console.log(myApples)

// algo 2: (this works!)
// sicne variables cant be redefined, try subtracting directly from the already defined variables.

myApples = myApples += 6
// console.log(myApples) 
yourApples = yourApples -= 6
console.log(yourApples)

//  I was able to learn something from the first incorrect attempt (that let variables are block scoped) and that helped me narrow down my next algorithm. Using COnsole.log to test the variables is useful. 