import { deleteDevice, getDeviceDetails, listAllDevices, registerDevice, updateDeviceStatus } from "../controllers/deviceController";
import express from "express";

const deviceRoutes = (router: express.Router) => {

  router.post("/devices", registerDevice);

  // Route for listing all devices
  router.get("/devices", listAllDevices);

  router.get("/devices/:deviceId", getDeviceDetails);

  // Route for updating device status by ID
  router.put("/devices/:deviceId", updateDeviceStatus);

  // Route for deleting a device by ID
  router.delete("/devices/:deviceId", deleteDevice);
};

export default deviceRoutes;
