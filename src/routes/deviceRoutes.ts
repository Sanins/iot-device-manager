import { deleteDevice, getDeviceDetails, listAllDevices, registerDevice, updateDeviceStatus } from "../controllers/deviceController";
import express from "express";

const deviceRoutes = (router: express.Router) => {

  router.post("/devices", registerDevice);

  // Route for listing all devices
  router.get("/devices", listAllDevices);

  router.get("/devices/:deviceId", getDeviceDetails);

  router.patch("/devices/:deviceId", updateDeviceStatus);

  router.delete("/devices/:deviceId", deleteDevice);
};

export default deviceRoutes;
