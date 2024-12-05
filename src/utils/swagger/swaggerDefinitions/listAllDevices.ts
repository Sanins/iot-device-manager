/**
 * @swagger
 * /api/v1/devices:
 *   get:
 *     summary: List all devices with pagination, sorting, and search
 *     description: Retrieve a paginated list of devices. Supports sorting by creation date and searching by device name, type, or description.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *           example: 2
 *         description: The page number to retrieve.
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 10
 *           example: 5
 *         description: The number of devices per page.
 *       - in: query
 *         name: orderType
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *           default: asc
 *           example: desc
 *         description: Sort order for creation date (`asc` for ascending, `desc` for descending).
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: thermostat
 *         description: A search string to filter devices by name, type, or description.
 *     responses:
 *       200:
 *         description: A list of devices with pagination data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 devices:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Unique identifier of the device.
 *                         example: "64b2e3f1a79b0c1d92d12d49"
 *                       name:
 *                         type: string
 *                         description: The name of the device.
 *                         example: "Smart Thermostat"
 *                       type:
 *                         type: string
 *                         description: The type of the device.
 *                         example: "Thermostat"
 *                       status:
 *                         type: string
 *                         description: The current status of the device.
 *                         example: "active"
 *                       description:
 *                         type: string
 *                         description: Description of the device.
 *                         example: "A thermostat that can be controlled remotely."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: The creation date of the device.
 *                         example: "2023-11-01T12:00:00.000Z"
 *                 total:
 *                   type: integer
 *                   description: Total number of devices matching the query.
 *                   example: 50
 *                 page:
 *                   type: integer
 *                   description: The current page number.
 *                   example: 2
 *                 perPage:
 *                   type: integer
 *                   description: The number of devices per page.
 *                   example: 5
 *                 totalPages:
 *                   type: integer
 *                   description: Total number of pages available.
 *                   example: 10
 *       400:
 *         description: Bad request, invalid query parameters.
 *       500:
 *         description: Internal server error.
 */

export default null;
