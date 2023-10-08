"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const NewsRoutes_1 = __importDefault(require("./routes/NewsRoutes"));
const logger_1 = require("./middlevire/logger");
const app_data_source_1 = require("./app-data-source");
app_data_source_1.myDataSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 8080;
app.use(logger_1.Logger);
app.use("/api/newsposts", NewsRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
