import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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
        url: "http://localhost:8800",
      },
    ],
  },
  apis: ["./src/index.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Test the root endpoint
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    res.send("is this working as expected");
  } catch (err) {
    console.log(err);
  }
});

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`);
});

export default app;