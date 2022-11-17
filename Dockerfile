FROM node:16-alpine

# Unfortunately, create-react-app currently has two bugs
# that prevent it from running correctly in a docker container
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]