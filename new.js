// I
//  const TAX_RATE  = 0.08;
//  var amount = 99.99;

//  amount = amount * 2;
//  amount = amount + (amount * TAX_RATE);
//  console.log(amount);
//  console.log(amount.toFixed(2));
// rezultat je 215.9784 i za drugi 215.98 (zaokruzuje na 2 decimale)

// II
// let a = 2;
// a += 2;

// console.log(a);

// III
// var amount = 99.99;
// amount = '$' + amount * 2;

// console.log(amount);
// rezultat $199.98

// IV
// var amount = 99.99;

// if (amount > 10){
//     amount = amount * 2;
//     console.log(amount);
// }
// rezultat 199.98

// V
// var bankBalance = 302.13;
// var amount = 99.99;

// if (amount < bankBalance){
//     console.log("I want to buy this!")
// }
// Rezultat I want to buy this!

// VI
// var bankBalance = 302.13;
// var amount = 99.99;

// if (amount < bankBalance){
//     console.log("I want to buy this!")
//     newBankBalance = bankBalance - amount;
//     console.log("Novo stanje na racunu posle kupovine " + newBankBalance);
// }
// Drugi console.log /Novo stanje na racunu posle kupovine je 202.14

// // VII
// const ACCESSORY_PRICE = 9.99;
// var bankBalance = 302.13;
// var amount = 99.99;

// amount = amount * 2 + ACCESSORY_PRICE;

// if (amount < bankBalance){
//     console.log("I'll take the 2 plus accesory!");
// }
// else {
//     console.log("That's too much!");
// }
// Za ovaj iznos daje prvi odgovor, ako povecamo amount, daje drugi

// VIII
// numOfCostumers = 5;

//  while (numOfCostumers > 0){
//      console.log ("How can I help you?");
//      numOfCostumers = numOfCostumers - 1;
//  }
//  do {
//      console.log ("Goodbuy!")
//      numOfCostumers = numOfCostumers - 1;
//  } while (numOfCostumers > 0);
// Rezultat 5*"How can..." i jednom "Goodbay!"

// IX
//  var i = 0;

//  while (true){
//      if (i <= 9){
//          console.log(i);
//          i = i + 1;
//      }
//      else {
//          break;
//      }
// }
// Rezultat broji dok je i manje ili = 9, rezultat 0 do 9

// X isto kao IX
// for (i = 0; i <= 9; i = i + 1){
//     console.log (i);
// }

