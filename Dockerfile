# Base image
FROM node:18-alpine

# Create working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Install a static server (optional, for running app)
RUN npm install -g http-server

# Expose a port
EXPOSE 8080

# Start server
CMD ["http-server", ".", "-p", "8080"]
