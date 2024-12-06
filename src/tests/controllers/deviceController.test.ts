import { Request, Response } from "express";
import * as DeviceController from "../../controllers/deviceController";
import * as DeviceService from "../../services/deviceService";
import { DeviceStatus, IDevice, OrderType } from "../../models/Device";

jest.mock("../../services/deviceService");

describe("Device Controller Tests", () => {
  it("should register a new device", async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    const mockRequest: Request<{}, {}, IDevice, Record<string, string>> = {
      body: {
        name: "Mocked Device",
        type: "Mocked Type",
        description: "Mocked description",
        serialNumber: "12345",
        status: DeviceStatus.ACTIVE,
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    } as Request<{}, {}, IDevice, Record<string, string>>;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    } as unknown as Response;

    (DeviceService.registerDevice as jest.Mock).mockResolvedValueOnce({
      _id: "mockedDeviceId",
      name: "Mocked Device",
      type: "Mocked Type",
      description: "Mocked description",
      serialNumber: "12345",
      status: DeviceStatus.ACTIVE,
    });

    await DeviceController.registerDevice(mockRequest, mockResponse);

    expect(DeviceService.registerDevice).toHaveBeenCalledWith(mockRequest.body);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
      _id: "mockedDeviceId",
      name: "Mocked Device",
      type: "Mocked Type",
      description: "Mocked description",
      serialNumber: "12345",
      status: DeviceStatus.ACTIVE,
    });
    expect(mockResponse.send).not.toHaveBeenCalled();
  });

  it("should list all devices successfully", async () => {
    const mockRequest = {
      query: {
        page: "1",
        perPage: "10",
        orderType: OrderType.ASC,
        search: "",
      },
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    } as unknown as Response;

    (DeviceService.listAllDevices as jest.Mock).mockResolvedValueOnce({
      devices: [
        { _id: "device1", name: "Device 1", type: "Type A" },
        { _id: "device2", name: "Device 2", type: "Type B" },
      ],
      total: 2,
      page: 1,
      perPage: 10,
      totalPages: 1,
    });

    await DeviceController.listAllDevices(mockRequest, mockResponse);

    expect(DeviceService.listAllDevices).toHaveBeenCalledWith(
      1,
      10,
      OrderType.ASC,
      "",
    );
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      devices: [
        { _id: "device1", name: "Device 1", type: "Type A" },
        { _id: "device2", name: "Device 2", type: "Type B" },
      ],
      total: 2,
      page: 1,
      perPage: 10,
      totalPages: 1,
    });
    expect(mockResponse.send).not.toHaveBeenCalled();
  });

  // In a prod example I would write more tests
});
