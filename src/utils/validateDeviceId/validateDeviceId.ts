export const validateDeviceId = (deviceId: string) => {
  if (deviceId.length !== 24) {
    return {
      valid: false,
      error: "Invalid device ID. It must be 24 characters long.",
    };
  }

  return { valid: true };
};
