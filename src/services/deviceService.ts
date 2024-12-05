import mongoose from "mongoose";
import Device, { DeviceStatus, IDevice } from "../models/Device";

export const registerDevice = async (deviceData: IDevice) => {
  try {
    const newDevice = new Device(deviceData);

    await newDevice.save();

    return newDevice;
  } catch (error) {
    throw new Error(`Error registering device: ${error.message}`);
  }
};

export const listAllDevices = async () => {
  try {
    return 'success';
  } catch (error) {
    throw new Error(`Error listing all devices: ${error.message}`);
  }
};


export const getDeviceDetails = async (uniqueIdentifier: string) => {
  try {
    const device = await Device.findOne({ _id: uniqueIdentifier });

    return device;
  } catch (error) {
    throw new Error(`Error getting device details: ${error.message}`);
  }
};


export const updateDeviceStatus = async (
  deviceId: string,
  status: DeviceStatus,
): Promise<IDevice | null> => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      deviceId,
      { status },
      { new: true, runValidators: true }
    );

    return updatedDevice;
  } catch (error) {
    throw new Error(`Error updating device: ${error.message}`);
  }
};

export const deleteDevice = async (deviceId: string) => {
  try {
    const result = await Device.deleteOne({ _id: deviceId });

    if (result.deletedCount === 0) {
      throw new Error("Device not found or already deleted");
    }

    return { message: "Device deleted successfully", deviceId };
  } catch (error) {
    throw new Error(`Error deleting device: ${error.message}`);
  }
};

export const findDeviceById = async (deviceId: string) => {
  try {
    const device = await Device.findById(deviceId);
    return device;
  } catch (error) {
    console.log('error', error);
    throw new Error(`Error finding device: ${error.message}`);
  }
};
