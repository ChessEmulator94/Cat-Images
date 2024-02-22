# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# # Copy package.json and package-lock.json (if available)
# COPY package*.json ./

# Install http-server globally via npm
RUN npm install -g http-server 
RUN npm install node-fetch

# Copy all source code to the container
# Copy the specific files
COPY index.html .
COPY app.js .
COPY cat.jpeg .
COPY styles.css .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run your web server when the container starts
CMD ["http-server", "-p", "5000"]
