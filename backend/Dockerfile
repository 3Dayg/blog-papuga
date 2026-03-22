# Every Dockerfile must begin with a FROM instruction, which specifies which image the newly 
# created image should be based on. You can extend your image from existing images, such as ubuntu or node.
FROM node:20

# set the working directory, which is where all files of our service will be placed inside the image
# The WORKDIR instruction is similar to using cd in the terminal. It changes the working directory so 
# that we do not have to prefix all the following commands with the full path. Docker creates the 
# folder for us if it does not exist yet.
WORKDIR /app

# The COPY instruction copies files from your local file system into the Docker image (relative to the 
# local working directory). Multiple files can be specified, and the last argument to the instruction is 
# the destination (in this case, the current working directory of the image).
# The package-lock.json file is needed to ensure that the Docker image contains the same versions of the 
# npm packages as our local build.
COPY package.json package-lock.json ./

# The RUN instruction executes a command in the working directory of the image.
RUN npm install

#  copy the rest of our application from the local file system to the Docker image:
#  Are you wondering why we initially just copied package.json and package-lock.json? Docker 
#  images are built layer by layer. Each instruction forms a layer of the image. 
#  If something changes, only the layers following the change are rebuilt. So, in our case, 
#  if any of the code changes, only this last COPY instruction is re-executed when rebuilding 
#  the Docker image. Only if dependencies change are the other COPY instruction and npm install
#  re-executed. Using this order of instruction reduces the time required to rebuild the image immensely.
COPY . .

# Run App
CMD ["npm", "start"]