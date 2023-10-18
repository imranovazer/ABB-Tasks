import "dotenv/config";
import express from "express";
import NewsRoutes from "./routes/NewsRoutes.ts";
import UserRoutes from "./routes/UserRoutes.ts";
import { Logger } from "./middlevire/logger.ts";
import { myDataSource } from "./app-data-source.ts";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };

import swaggerUi from "swagger-ui-express";

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
app.use("/api/user", UserRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
