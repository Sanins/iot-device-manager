import { Request, Response } from "express";
import * as DeviceService from "../services/deviceService";

export const registerDevice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await DeviceService.registerDevice();
    res.status(200).json(newProduct);
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
    const newProduct = await DeviceService.getDeviceDetails();
    res.status(200).json(newProduct);
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
  try {
    const newProduct = await DeviceService.deleteDevice();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};