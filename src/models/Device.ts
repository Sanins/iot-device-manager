import mongoose, { Schema, Document } from "mongoose";

export enum DeviceStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export enum OrderType {
    ASC = "asc",
    DESC = "desc",
}

export interface IDevice extends Document {
  name: string;
  type: string;
  serialNumber: string;
  status: DeviceStatus;
  description: string;
}

const deviceSchema: Schema<IDevice> = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    status: {
        type: String,
        required: true,
        enum: Object.values(DeviceStatus),
        default: DeviceStatus.INACTIVE,
      },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IDevice>("Device", deviceSchema);