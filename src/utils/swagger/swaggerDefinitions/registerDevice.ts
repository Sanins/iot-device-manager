// src/utils/swaggerDefinitions.ts

/**
 * @swagger
 * /api/v1/devices:
 *   post:
 *     summary: Register a new IoT device
 *     description: This endpoint registers a new IoT device by accepting device details such as name, type, serial number, status, and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the device.
 *                 example: "Wi-Fi Thermostat"
 *               type:
 *                 type: string
 *                 description: The type of the device (e.g., "Light", "Sensor", "Thermostat").
 *                 example: "Thermostat"
 *               serialNumber:
 *                 type: string
 *                 description: The unique serial number of the device.
 *                 example: "67890XYZ"
 *               status:
 *                 type: string
 *                 description: The current status of the device.
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: "inactive"
 *               description:
 *                 type: string
 *                 description: A detailed description of the device.
 *                 example: "A smart thermostat that adjusts temperature settings remotely."
 *     responses:
 *       201:
 *         description: Device successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the registered device.
 *                   example: "64b2e3f1a79b0c1d92d12d49"
 *                 name:
 *                   type: string
 *                   description: The name of the device.
 *                   example: "Smart Light Bulb"
 *                 type:
 *                   type: string
 *                   description: The type of the device.
 *                   example: "Light"
 *                 serialNumber:
 *                   type: string
 *                   description: The serial number of the device.
 *                   example: "12345ABC"
 *                 status:
 *                   type: string
 *                   description: The status of the device.
 *                   enum:
 *                     - active
 *                     - inactive
 *                   example: "active"
 *                 description:
 *                   type: string
 *                   description: A description of the device.
 *                   example: "A smart bulb that can be controlled via an app."
 *       400:
 *         description: Bad request, validation failed.
 *       500:
 *         description: Internal server error.
 */

export default null;