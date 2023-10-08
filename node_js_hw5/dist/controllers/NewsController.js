"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data"));
const NewsController = {
    getById: (req, res) => {
        const { id } = req.params;
        try {
            const dataToSend = data_1.default.find((item) => item.id == id);
            if (dataToSend) {
                return res.status(200).json({
                    status: "sucess",
                    data: dataToSend,
                });
            }
            else {
                return res.status(404).json({
                    status: "fail",
                    message: "New with that id not found",
                });
            }
        }
        catch (error) {
            res.status(500).json({
                status: "fail",
                error,
            });
        }
    },
    getNews: (req, res) => {
        try {
            const { page, size } = req.query;
            const pageI = Number(page) || 1;
            const sizeI = Number(size) || 5;
            const startIndex = (pageI - 1) * sizeI;
            const endIndex = startIndex + sizeI;
            const dataToSend = data_1.default.slice(startIndex, endIndex);
            res.status(200).json({
                status: "sucess",
                data: dataToSend,
            });
        }
        catch (error) {
            res.status(500).json({
                status: "fail",
                error,
            });
        }
    },
    createNew: (req, res) => {
        try {
            const { title, text } = req.body;
            const newId = Math.floor(Math.random() * 999);
            const dataToSend = {
                id: newId.toString(),
                title,
                text,
            };
            data_1.default.push(dataToSend);
            res.status(201).json({
                status: "sucess",
                data: dataToSend,
            });
        }
        catch (error) {
            res.status(500).json({
                status: "fail",
                error,
            });
        }
    },
    editNew: (req, res) => {
        try {
            const { id } = req.params;
            const userInput = req.body;
            const dataToEdit = data_1.default.find((item) => item.id == id);
            if (dataToEdit) {
                for (const [key, value] of Object.entries(userInput)) {
                    //@ts-ignore
                    dataToEdit[key] = value;
                }
                res.status(200).json({
                    status: "sucess",
                    data: dataToEdit,
                });
            }
            else {
                return res.status(404).json({
                    status: "fail",
                    message: "New with that id not found",
                });
            }
        }
        catch (error) {
            res.status(500).json({
                status: "fail",
                error,
            });
        }
    },
    deleteNew: (req, res) => {
        try {
            const { id } = req.params;
            const dataIndex = data_1.default.findIndex((item) => item.id == id);
            if (dataIndex !== -1) {
                data_1.default.splice(dataIndex, 1);
                res.status(200).json({
                    status: "success",
                    message: "Item deleted successfully",
                });
            }
            else {
                return res.status(404).json({
                    status: "fail",
                    message: "New with that id not found",
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                status: "fail",
                error,
            });
        }
    },
};
exports.default = NewsController;
