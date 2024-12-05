/**
 * @swagger
 * /api/v1/devices/{deviceId}:
 *   delete:
 *     summary: Delete a device by its deviceId
 *     description: This endpoint deletes an IoT device using its unique `deviceId`.
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         description: The unique identifier of the device to delete.
 *         schema:
 *           type: string
 *           example: "64b2e3f1a79b0c1d92d12d49"
 *     responses:
 *       200:
 *         description: Device successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: "Device deleted successfully"
 *                 deviceId:
 *                   type: string
 *                   description: The unique identifier of the deleted device.
 *                   example: "64b2e3f1a79b0c1d92d12d49"
 *       404:
 *         description: Device not found with the provided ID.
 *       500:
 *         description: Internal server error.
 */
