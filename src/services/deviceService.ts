import Device, { IDevice } from "../models/Device";

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


export const getDeviceDetails = async () => {
  try {
    return 'success';
  } catch (error) {
    throw new Error(`Error getting device details: ${error.message}`);
  }
};


export const updateDeviceStatus = async () => {
  try {
    return 'success';
  } catch (error) {
    throw new Error(`Error updating device: ${error.message}`);
  }
};


export const deleteDevice = async () => {
  try {
    return 'success';
  } catch (error) {
    throw new Error(`Error deleting device: ${error.message}`);
  }
};

