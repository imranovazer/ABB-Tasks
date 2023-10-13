"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const promises_1 = __importDefault(require("fs/promises"));
//{METHOD} {URL} query:{QUERYPARAMS} body:{BODY}
const Logger = (req, res, next) => {
    console.log(req.url);
    promises_1.default.writeFile("logs.txt", `${req.method} ${req.url} query:${JSON.stringify(req.query)} body: ${JSON.stringify(req.params)} \n`, {
        flag: "a",
    });
    return next();
};
exports.Logger = Logger;
