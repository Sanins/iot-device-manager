# Iot Device Manager

## Docker Setup Instructions

This project can be run using Docker to simplify the setup process. Below are the steps to get everything running with Docker and Docker Compose.

### Prerequisites

Before getting started, make sure you have the following installed:

- Docker (https://www.docker.com/)
- Docker Compose (https://docs.docker.com/compose/)

Once you’re in the project directory, use Docker Compose to build and start the services:

`docker-compose up --build`

## Access the application

By default, the application will be accessible at `http://localhost:8800`. You can now access the backend API and start interacting with it.

### Seeding the database (optional)

If you’d like to seed the MongoDB database with sample data, follow these steps:

- Ensure MongoDB is running
- run the script below

`docker-compose run backend ts-node src/seed/seed.ts`

## stopping the application

To stop all services

`docker-compose down`

## Swagger (api documentation)

Swagger provides an easy way to explore and test the API endpoints directly in your browser.

To access the Swagger UI, start the server and visit:
`http://localhost:8800/api-docs/`

## Linting and formatting

This project uses ESLint and Prettier to ensure code quality and consistent formatting.

To use the linting service use the command

`yarn lint`

## Testing

Jest is used as the testing framework

Use the following command to test the project

`yarn test`
