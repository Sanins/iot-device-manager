/**
 * @swagger
 * /api/v1/devices/{deviceId}:
 *   get:
 *     summary: Get device details by device ID
 *     description: This endpoint retrieves detailed information about a specific IoT device by its unique `deviceId`.
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         description: The unique identifier of the device to retrieve.
 *         schema:
 *           type: string
 *           example: "64b2e3f1a79b0c1d92d12d49"
 *     responses:
 *       200:
 *         description: Device details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the device.
 *                   example: "64b2e3f1a79b0c1d92d12d49"
 *                 name:
 *                   type: string
 *                   description: The name of the device.
 *                   example: "Smart Thermostat"
 *                 type:
 *                   type: string
 *                   description: The type of the device (e.g., "Thermostat").
 *                   example: "Thermostat"
 *                 serialNumber:
 *                   type: string
 *                   description: The serial number of the device.
 *                   example: "12345XYZ"
 *                 status:
 *                   type: string
 *                   description: The current status of the device.
 *                   enum:
 *                     - active
 *                     - inactive
 *                   example: "active"
 *                 description:
 *                   type: string
 *                   description: A detailed description of the device.
 *                   example: "A smart thermostat with remote control features."
 *       404:
 *         description: Device not found with the provided ID.
 *       500:
 *         description: Internal server error.
 */

export default null;
