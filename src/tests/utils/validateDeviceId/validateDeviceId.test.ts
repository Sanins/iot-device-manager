import { validateDeviceId } from "../../../utils/validateDeviceId/validateDeviceId";

describe("validateDeviceId", () => {
  it("should return valid true when device ID is 24 characters long", () => {
    const result = validateDeviceId("123456789012345678901234");
    expect(result.valid).toBe(true);
  });

  it("should return valid false when device ID is not 24 characters long", () => {
    const result = validateDeviceId("12345678901234567890");
    expect(result.valid).toBe(false);
    expect(result.error).toBe(
      "Invalid device ID. It must be 24 characters long.",
    );
  });

  it("should return valid false when device ID is too long", () => {
    const result = validateDeviceId("123456789012345678901234567890");
    expect(result.valid).toBe(false);
    expect(result.error).toBe(
      "Invalid device ID. It must be 24 characters long.",
    );
  });
});
