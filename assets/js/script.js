//scrivo un programma che stampi i numeri da 1 a 100
//per i multipli di 3 stampo FIZZ
//per i multipli di 5 stampo BUZZ
//per i multipli di 3 e di 5 stampo FIZZBUZZ

var numero = [];
/* console.log(numero); */

for(var i = 0; i < 100; i++){
  numero[i] = i + 1;

  if(numero[i] % 3 == 0 && numero[i] % 5 == 0){
    console.log(numero[i] + " FizzBuzz");
    document.getElementById("box").innerHTML += numero[i] + " FizzBuzz; <br>";
  }else if(numero[i] % 5 == 0){
    console.log(numero[i] + " Buzz");
    document.getElementById("box").innerHTML += numero[i] + " Buzz; <br>";

  }else if(numero[i] % 3 == 0){
    console.log(numero[i] + " Fizz");
    document.getElementById("box").innerHTML += numero[i] + " Fizz; <br>";
  }else{
    console.log(numero[i]);
    document.getElementById("box").innerHTML += numero[i] + "; <br>";
  }



}