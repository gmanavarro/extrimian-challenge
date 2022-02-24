FROM tarampampam/node:17-alpine

WORKDIR /blockchain
COPY . .
RUN yarn global add truffle
CMD ["truffle", "deploy", "--network", "development"]