import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import mongoose from "mongoose";
import { setupSwaggerDocs } from "./utils/swagger/swagger";

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());

setupSwaggerDocs(app);

// I would put configs in env files but since it's a simple example I'm hardcoding it
mongoose
  .connect("mongodb://mongo:27017/homeLink")
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
