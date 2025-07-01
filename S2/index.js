const myName = "Ninfa";
let age = 30;

// Se ho più di 18 anni mettiamo in console "Sei maggiorenne"

let maggiorenne = age >= 18 ? "Sei maggiorenne" : "Sei minorenne";

console.log(maggiorenne);

if (age > 18) {
  console.log("Sei maggiorenne");
} else if (age > 70) {
  console.log("Ci dispiace non puoi salire");
} else {
  console.log("Sei minorenne");
}

switch (age) {
  case age > 18 && age < 23:
    //do this
    break;
  case age > 19:
    //do this
    break;
  case age > 18:
    //do this
    break;
  case age > 18:
    //do this
    break;
  case age > 18:
    //do this
    break;
  case age > 18:
    //do this
    break;
  case age > 18:
    //do this
    break;
  default:
    //do this
    break;
}

/*
Operatore ternario: lo usiamo quando abbiamo una condizione booleana
If Else: Lo usiamo quando abbiamo fino a 3 condizioni 
switch: da 4 condizioni in su
*/


//While, Do/While, For

let number1 = 11
while(number1 < 10){
    console.log(number1)
    number1 ++
}

let number2 = 11
do{
    console.log(number2)
    number2 ++
} while(number2 <10)

for(let i = 0; i < 10 ; i++){
    console.log(i)
}

//Array

let myArray = [1,2,3,4,5,6,7,8,9]
let myArray2 = [1,2,3,4,"ciao",5,6]
let i = 0
let somma = 0

while (i< myArray.length){
    somma += myArray[i]
    i++
}

let somma2= 0
for(let x = 0; x< myArray.length ; x++){
    somma2 += myArray[i]
}