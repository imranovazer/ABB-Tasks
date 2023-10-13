import "dotenv/config";
import express from "express";
import NewsRoutes from "./routes/NewsRoutes.ts";

import { Logger } from "./middlevire/logger.ts";
import { myDataSource } from "./app-data-source.ts";


myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use(Logger);
app.use("/api/newsposts", NewsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
