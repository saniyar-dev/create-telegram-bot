FROM node:16
WORKDIR app/

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .
CMD [ "node", "src/index.ts"]