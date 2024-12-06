import * as DeviceService from "../../services/deviceService";
import Device, { DeviceStatus, IDevice } from "../../models/Device";

jest.mock("../../models/Device");

describe("Product Service Tests", () => {
  it("should register a new device successfully", async () => {
    const mockDeviceData: IDevice = {
      name: "Mocked Device",
      type: "Type1",
      description: "Mock description",
      serialNumber: "123456789",
      status: DeviceStatus.ACTIVE,
    } as unknown as IDevice;

    const mockDevice = {
      ...mockDeviceData,
      _id: "mockedDeviceId",
      createdAt: new Date(),
    };

    (Device.prototype.save as jest.Mock).mockResolvedValueOnce(mockDevice);

    await DeviceService.registerDevice(mockDeviceData);

    expect(Device.prototype.save).toHaveBeenCalled();
  });

  it("should throw an error when device registration fails", async () => {
    const mockDeviceData: IDevice = {
      name: "Mocked Device",
      type: "Type1",
      description: "Mock description",
      serialNumber: "123456789",
      status: DeviceStatus.ACTIVE,
    } as unknown as IDevice;

    (Device.prototype.save as jest.Mock).mockRejectedValue(
      new Error("Device registration failed"),
    );

    await expect(DeviceService.registerDevice(mockDeviceData)).rejects.toThrow(
      "Device registration failed",
    );
  });

  // In a prod example I would write more tests
});
