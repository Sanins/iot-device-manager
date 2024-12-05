import express from "express";
import deviceRoutes from "./deviceRoutes";
const router = express.Router();

export default (): express.Router => {
  deviceRoutes(router);
  return router;
};
