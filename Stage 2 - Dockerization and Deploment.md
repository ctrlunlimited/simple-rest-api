### Part 2: Dockerization and Local Deployment

#### 1. Create a Dockerfile:
Create a file named Dockerfile in your project directory and add the following content
```
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
```
#### 2. Build the Docker image:

Open a terminal, navigate to your project directory, and run the following command to build the Docker image:

`docker build -t my-rest-api .`

This command will build the Docker image and tag it with the name my-rest-api

#### 3. Run the Docker container:

After building the Docker image, you can run a container from it using the following command:

`docker run -p 3000:3000 my-rest-api`

This command will start a container from the my-rest-api image and map port 3000 of the container to port 3000 on your local machine.

Now, your REST API application is Dockerized and running inside a Docker container. You can access it at `http://localhost:3000`

if using public cloud you can access it using `http://ip-of-your-vm:3000` . Also, ensure port 3000 is opened on your SG 

#### 4. Alternatively, you can use code below to pull the image from docker 
```
docker pull domogun/simple-rest-api:tag
docker run -p 3000:3000 domogun/simple-rest-api:tag
```
