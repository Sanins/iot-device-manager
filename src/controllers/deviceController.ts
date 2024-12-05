import { Request, Response } from "express";
import * as DeviceService from "../services/deviceService";
import { IDevice } from "models/Device";
import { validateDeviceId } from "./../utils/validateDeviceId/validateDeviceId";

export const registerDevice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deviceData: IDevice = req.body;

    const newDevice = await DeviceService.registerDevice(deviceData);

    res.status(201).json(newDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listAllDevices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await DeviceService.listAllDevices();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDeviceDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { deviceId } = req.params;

    const validation = validateDeviceId(deviceId);
    if (!validation.valid) {
      res.status(400).json({ error: validation.error });
      return 
    }

    const deviceDetails = await DeviceService.getDeviceDetails(deviceId);

    if (!deviceDetails) {
      res.status(404).json({ error: 'Device not found' });
      return;
    }

    res.status(200).json(deviceDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDeviceStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await DeviceService.updateDeviceStatus();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDevice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { deviceId } = req.params;

  const validation = validateDeviceId(deviceId);
  if (!validation.valid) {
    res.status(400).json({ error: validation.error });
    return 
  }

  try {
    const device = await DeviceService.findDeviceById(deviceId);
    if (!device) {
      res.status(404).json({ error: 'Device not found' });
      return
    }

    const result = await DeviceService.deleteDevice(deviceId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
