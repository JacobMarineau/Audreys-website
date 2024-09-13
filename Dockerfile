# Use an official Node.js runtime as a base image
FROM node:14-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (optional)
EXPOSE 5000

# Define the command to start your application
CMD ["npm", "start"]