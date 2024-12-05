import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import mongoose from "mongoose";

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Iot Device Manager",
      version: "1.0.0",
      description: "API documentation for Iot Device Manager",
    },
    servers: [
      {
        url: "http://localhost:8800/",
      },
    ],
  },
  apis: ["./src/routes/**/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


mongoose
  .connect('mongodb://mongo:27017/homeLink')
  .then(() => {
    console.log("MongoDB connected to the backend successfully");
  })
  .catch((err) => console.log(err));

app.use("/api/v1/", routes());

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`);
});

export default app;