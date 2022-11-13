import { Scenes } from "telegraf";
import { getValue } from "../i18n/i18n";

const startScene = new Scenes.BaseScene<Scenes.SceneContext>("start-scene");

startScene.enter((ctx) => {
  ctx.reply(getValue("start-message"));
});

export default startScene;
