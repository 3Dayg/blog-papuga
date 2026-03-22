# In this newly created file, first, use the node image again,
#  but this time we tag it AS build. Doing so enables multi-stage builds in Docker, 
#  which means that we can use another base image later for our final image:
FROM node:20 AS build
# During build time, we also set the VITE_BACKEND_URL environment variable. In Docker, 
# we can use the ARG instruction to define environment variables that are only relevant 
# when the image is being built:
ARG VITE_BACKEND_URL=http://localhost:3001/api/v1

# We set the working directory to /build for the build stage, and then repeat the same 
# instructions that we defined for the backend to install all necessary dependencies
#  and copy over the necessary files:
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
# Additionally, we execute npm run build to create a static build of our Vite app:
RUN npm run build
# Now, our build stage is completed. We use the FROM instruction again to create the
#  final stage. This time, we base it off the nginx image, which runs an nginx web server:
FROM nginx AS final
# We set the working directory for this stage to /var/www/html, which is the folder that 
# nginx serves static files from:
WORKDIR /usr/share/nginx/html
# Lastly, we copy everything from the /build/dist folder (which is where Vite puts the built
#  static files) from the build stage into the final stage:
COPY --from=build /build/dist .