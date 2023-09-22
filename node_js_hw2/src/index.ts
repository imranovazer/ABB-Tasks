import { it } from "node:test";
import { v4 as uuidv4 } from "uuid";

export enum CurrencyEnum {
  USD,
  UAH,
}

export class Transaction {
  id: string;
  Amount: number;
  Currency: CurrencyEnum;
  constructor(amount: number, currency: CurrencyEnum) {
    this.id = uuidv4();
    this.Amount = amount;
    this.Currency = currency;
  }
}
export class Card {
  Transactions: Transaction[];
  constructor() {
    this.Transactions = [];
  }

  AddTransaction = (
    ...rest: Transaction[] | [CurrencyEnum, number]
  ): string => {
    if (rest.length === 1) {
      this.Transactions = [...this.Transactions, rest[0]];
      return rest[0].id;
    } else if (rest.length === 2) {
      const newTransaction = new Transaction(
        rest[1] as number,
        rest[0] as CurrencyEnum
      );
      this.Transactions = [...this.Transactions, newTransaction];
      return newTransaction.id;
    }
    return "";
  };
  GetTransaction = (id: string): Transaction | undefined => {
    return this.Transactions.find((item) => item.id === id);
  };
  GetBalance = (currency: CurrencyEnum): number => {
    let total = 0;
    this.Transactions.forEach((item) => {
      if (item.Currency === currency) {
        total = total + item.Amount;
      } else {
        if (currency === CurrencyEnum.UAH) {
          total = total + item.Amount * 36.93;
        } else if (currency === CurrencyEnum.USD) {
          total = total + item.Amount / 36.93;
        }
      }
    });
    return total;
  };
}
