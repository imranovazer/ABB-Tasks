import { CurrencyEnum } from ".";
import { Transaction } from ".";
import { Card } from ".";

const transaction1 = new Transaction(1000, CurrencyEnum.USD);
const transaction2 = new Transaction(2000, CurrencyEnum.UAH);

const myCard = new Card();

myCard.AddTransaction(transaction1);
myCard.AddTransaction(transaction2);
const newOperation = myCard.AddTransaction(CurrencyEnum.USD, 5000);

console.log("Last transaction", myCard.GetTransaction(newOperation));

console.log("My balance in USD", myCard.GetBalance(CurrencyEnum.USD));
console.log("My balance in UAH", myCard.GetBalance(CurrencyEnum.UAH));
