"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("common"));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Express API Documentation",
            version: "1.0.0",
            description: "API documentation for your Express app",
        },
        servers: [
            {
                url: "http://localhost:8800",
            },
        ],
    },
    apis: ["./src/index.ts"],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// Routes
/**
 * @swagger
 * /:
 *   get:
 *     summary: Test the root endpoint
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", async (req, res) => {
    try {
        res.send("is this working as expected");
    }
    catch (err) {
        console.log(err);
    }
});
// Server
const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Backend server is running at port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map