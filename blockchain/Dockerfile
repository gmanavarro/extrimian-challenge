FROM tarampampam/node:17-alpine

ARG NETWORK_ID

WORKDIR /blockchain
COPY . .
RUN sed -i "s|change me|${NETWORK_ID}|g" truffle-config.js
RUN yarn global add truffle solc
CMD ["truffle", "deploy", "--network", "development"]