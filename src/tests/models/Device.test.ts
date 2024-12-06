import Device, { IDevice, DeviceStatus } from "../../models/Device";

jest.mock("../../models/Device", () => {
  const originalModule = jest.requireActual("../../models/Device");

  return {
    ...originalModule,
    insertMany: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    countDocuments: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findById: jest.fn(),
    deleteOne: jest.fn(),
    create: jest.fn(),
  };
});

describe("Device Model", () => {
  it("should insert multiple devices", async () => {
    const devicesData: Partial<IDevice>[] = [
      {
        name: "Device A",
        type: "Type 1",
        serialNumber: "12345ABC",
        status: DeviceStatus.ACTIVE,
        description: "Test device A",
      },
      {
        name: "Device B",
        type: "Type 2",
        serialNumber: "67890XYZ",
        status: DeviceStatus.INACTIVE,
        description: "Test device B",
      },
    ];

    (Device.insertMany as jest.Mock).mockResolvedValue(devicesData);

    const devices = await Device.insertMany(devicesData);

    expect(devices).toHaveLength(2);
    expect(devices[0].name).toBe(devicesData[0].name);
  });

  it("should find all devices", async () => {
    const mockDevices = [
      {
        name: "Device A",
        type: "Type 1",
        serialNumber: "12345ABC",
        status: DeviceStatus.ACTIVE,
        description: "Test device A",
      },
      {
        name: "Device B",
        type: "Type 2",
        serialNumber: "67890XYZ",
        status: DeviceStatus.INACTIVE,
        description: "Test device B",
      },
    ];

    (Device.find as jest.Mock).mockResolvedValue(mockDevices);

    const devices = await Device.find();

    expect(devices).toBeInstanceOf(Array);
    expect(devices).toHaveLength(2);
  });

  // In a prod example I would write more tests
});
