let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let varD = varA; //A
varA = varB;
varB = varC;
varC = varD;    


console.log(varA, varB, varC);