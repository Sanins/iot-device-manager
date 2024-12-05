import Device, { DeviceStatus, IDevice, OrderType } from "../models/Device";

export const registerDevice = async (deviceData: IDevice) => {
  try {
    const newDevice = new Device(deviceData);

    await newDevice.save();

    return newDevice;
  } catch (error) {
    throw new Error(`Error registering device: ${error.message}`);
  }
};

export const listAllDevices = async (
  page: number,
  perPage: number,
  orderType: OrderType,
  search: string,
) => {
  try {
    const skip = (page - 1) * perPage;

    const searchQuery = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { type: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { serialNumber: { $regex: search, $options: "i" } },
            { status: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const devices = await Device.find(searchQuery)
      .sort({ createdAt: orderType === OrderType.ASC ? 1 : -1 })
      .skip(skip)
      .limit(perPage);

    const total = await Device.countDocuments(searchQuery);

    const totalPages = Math.ceil(total / perPage);

    return {
      devices,
      total,
      page,
      perPage,
      totalPages: totalPages,
    };
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
      { new: true, runValidators: true },
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
    console.log("error", error);
    throw new Error(`Error finding device: ${error.message}`);
  }
};
