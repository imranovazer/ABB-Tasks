"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Transaction = exports.CurrencyEnum = void 0;
const uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
class Transaction {
    constructor(amount, currency) {
        this.id = (0, uuid_1.v4)();
        this.Amount = amount;
        this.Currency = currency;
    }
}
exports.Transaction = Transaction;
class Card {
    constructor() {
        this.AddTransaction = (...rest) => {
            if (rest.length === 1) {
                this.Transactions = [...this.Transactions, rest[0]];
                return rest[0].id;
            }
            else if (rest.length === 2) {
                const id = (0, uuid_1.v4)();
                const newTransaction = new Transaction(rest[0], rest[1]);
                this.Transactions = [...this.Transactions, newTransaction];
                return id;
            }
            return "";
        };
        this.GetTransaction = (id) => {
            return this.Transactions.find((item) => item.id === id);
        };
        this.GetBalance = (currency) => {
            let total = 0;
            this.Transactions.forEach((item) => {
                total = total + item.Amount;
            });
            return total;
        };
        this.Transactions = [];
    }
}
exports.Card = Card;
