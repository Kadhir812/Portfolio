# Step 1: Build stage using Node.js image (for dependency installation and build)
FROM node:20.11.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (including dev dependencies for building)
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (if needed, e.g., for a React app)
RUN npm run build

# Step 2: Distroless stage (runtime image)
FROM gcr.io/distroless/nodejs:20

# Set the working directory inside the container for the distroless image
WORKDIR /app

# Copy only the build output (from the build stage) and required files into the distroless image
COPY --from=build /app /app

# Expose the port used by Vite dev server
EXPOSE 5173

# Set the default command to run the application (in this case, the production build)
CMD ["npm", "run", "dev"]
