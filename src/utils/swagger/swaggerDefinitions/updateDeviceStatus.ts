/**
 * @swagger
 * /api/v1/devices/{deviceId}:
 *   patch:
 *     summary: Update the status of a device
 *     description: Updates the status of an IoT device by its unique ID.
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the device to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new status of the device.
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: active
 *     responses:
 *       200:
 *         description: Device status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the updated device.
 *                   example: "64b2e3f1a79b0c1d92d12d49"
 *                 name:
 *                   type: string
 *                   description: The name of the device.
 *                   example: "Smart Thermostat"
 *                 type:
 *                   type: string
 *                   description: The type of the device.
 *                   example: "Thermostat"
 *                 serialNumber:
 *                   type: string
 *                   description: The serial number of the device.
 *                   example: "12345ABC"
 *                 status:
 *                   type: string
 *                   description: The updated status of the device.
 *                   example: active
 *                 description:
 *                   type: string
 *                   description: A detailed description of the device.
 *                   example: "An advanced thermostat with Wi-Fi capability."
 *       400:
 *         description: Invalid device ID or status.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: "Invalid device ID format."
 *       404:
 *         description: Device not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: "Device not found."
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: "An unexpected error occurred."
 */

export default null;
