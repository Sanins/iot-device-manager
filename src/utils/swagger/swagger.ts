import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
        title: "Iot Device Manager",
        version: "1.0.0",
        description: "API documentation for Iot Device Manager",
        },
        servers: [
        {
            url: "http://localhost:8800/",
        },
        ],
    },
    apis: [
        './src/routes/**/*.ts',
        './src/utils/swagger/swaggerDefinitions/*.ts',
    ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwaggerDocs = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default swaggerDocs;