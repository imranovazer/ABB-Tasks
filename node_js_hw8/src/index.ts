import "dotenv/config";
import express from "express";
import NewsRoutes from "./routes/NewsRoutes.ts";
import swaggerUi from "swagger-ui-express";
import { Logger } from "./middlevire/logger.ts";
import { myDataSource } from "./app-data-source.ts";
import { specs } from "./util/swagger.options.ts";

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 8080;

app.use(Logger);
app.use("/api/newsposts", NewsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
