# Use an official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock (if using Yarn) or package-lock.json
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Install TypeScript globally (if necessary)
RUN yarn global add typescript ts-node

# Command to run the seed script using ts-node (TypeScript execution)
CMD ["ts-node", "src/seed/seed.ts"]