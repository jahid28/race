# my-mern-app/server/Dockerfile

# Use a Node.js base image
FROM node:18

# Set the working directory

# Copy package.json and install dependencies
# COPY package.json ./
# RUN npm install

WORKDIR /app
# Copy the rest of the app's source code
COPY ./mongo.js /app
COPY ./reactServer.js /app
COPY ./package.json /app
RUN npm install
ENV MY_EMAIL=newMail@gmail.com
ENV MY_EMAIL_PASS=icaqyhaeljystjav
ENV MY_PORT=5555
ENV MY_DATABASE_URL=mongodb+srv://SigmaJDN:Jahidkhan%40786@cluster0.bln78th.mongodb.net/mern_ecommerce

# Expose port 5000 to access the API
# EXPOSE 8000

# Command to run the server
CMD ["node" ,"reactServer.js"]
# CMD ["node", "start"]
