import { Telegraf, Scenes, session } from "telegraf";
import { SocksProxyAgent } from "socks-proxy-agent";
import { setupStages } from "./stage";
import { setupCommands } from "./commands";
import config from "./config";
const proxyAgent = new SocksProxyAgent({
  hostname: "localhost",
  port: "1080",
});

const botToken = config.DOCKER_BOT_TOKEN ?? config.BOT_TOKEN;

if (botToken === "" || !botToken)
  throw new Error(
    "NO BOT_TOKEN Please enter your bot token in docker compose file or in your .env file"
  );

const bot = new Telegraf<Scenes.SceneContext>(botToken, {
  telegram: {
    agent: proxyAgent,
  },
});

bot.use(session());
setupStages(bot);

setupCommands(bot);

bot.launch();
