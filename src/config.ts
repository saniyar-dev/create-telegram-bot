import * as dotenv from "dotenv";
dotenv.config();

const config = {
  DOCKER_BOT_TOKEN: process.env.DOCKER_BOT_TOKEN,
  BOT_TOKEN: process.env.BOT_TOKEN ?? "",
};

export default config;
