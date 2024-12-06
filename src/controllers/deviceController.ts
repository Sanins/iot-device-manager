import { Request, Response } from "express";
import * as DeviceService from "../services/deviceService";
import { DeviceStatus, IDevice, OrderType } from "../models/Device";
import { validateDeviceId } from "./../utils/validateDeviceId/validateDeviceId";

export const registerDevice = async (
  req: Request,
  res: Response,
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
  res: Response,
): Promise<void> => {
  try {
    const {
      page = 1,
      perPage = 10,
      orderType = OrderType.ASC,
      search = "",
    } = req.query;

    const validOrderType = Object.values(OrderType).includes(
      orderType as OrderType,
    )
      ? (orderType as OrderType)
      : OrderType.ASC;

    const devices = await DeviceService.listAllDevices(
      Number(page),
      Number(perPage),
      validOrderType,
      search.toString(),
    );

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDeviceDetails = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { deviceId } = req.params;

    const validation = validateDeviceId(deviceId);
    if (!validation.valid) {
      res.status(400).json({ error: validation.error });
      return;
    }

    const deviceDetails = await DeviceService.getDeviceDetails(deviceId);

    if (!deviceDetails) {
      res.status(404).json({ error: "Device not found" });
      return;
    }

    res.status(200).json(deviceDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDeviceStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { deviceId } = req.params;
  const { status } = req.body;

  const validation = validateDeviceId(deviceId);
  if (!validation.valid) {
    res.status(400).json({ error: validation.error });
    return;
  }

  const validStatuses = [DeviceStatus.ACTIVE, DeviceStatus.INACTIVE];
  if (!validStatuses.includes(status)) {
    res.status(400).json({
      error: `Invalid status. Status must be one of: ${validStatuses.join(", ")}`,
    });
    return;
  }

  try {
    const device = await DeviceService.findDeviceById(deviceId);
    if (!device) {
      res.status(404).json({ error: "Device not found" });
      return;
    }

    const updatedDevice = await DeviceService.updateDeviceStatus(
      deviceId,
      status,
    );

    if (!updatedDevice) {
      res.status(500).json({ error: "Failed to update device status" });
      return;
    }

    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDevice = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { deviceId } = req.params;

  const validation = validateDeviceId(deviceId);
  if (!validation.valid) {
    res.status(400).json({ error: validation.error });
    return;
  }

  try {
    const device = await DeviceService.findDeviceById(deviceId);
    if (!device) {
      res.status(404).json({ error: "Device not found" });
      return;
    }

    const result = await DeviceService.deleteDevice(deviceId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
