# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package.json package-lock.json ./

# Install dependencies using npm ci for a clean install
RUN npm ci

# Copy the application source code into the container
COPY . .

# Expose the application port (replace with your app's port if different)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
