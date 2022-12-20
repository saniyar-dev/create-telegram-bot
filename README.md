# Create Telegram Bot

This is a project based on [Telegraf](https://telegraf.js.org/ "Telegraf") to create telegram bot easier.

By default it implements [Telegraf Scenes](https://telegraf.js.org/modules/Scenes.html "Telegraf bullshit doc for scenes") to handle everything.

For more information on Telegraf Scenes read [this](https://github.com/telegraf/telegraf/issues/705 "issue 705").

This Project also setup some basics for i18n, but it's all self written by me. You can use it if you want but i don't guarantee any thing.

## **You can use this one line script to create and setup this project environment for you:**

```
bash <(curl -sL https://raw.githubusercontent.com/saniyar-dev/scripts/main/setup_telegrambot.sh)
```

## **You can use docker compose to have development environment with this command**

### **important: First add your bot token in docker.compose.dev.yml file**

```
sudo docker compose -f docker.compose.dev.yml up --build
```

#### **Author: Saniyar Karami**

#### **Contact: [email](saniyar.dev@gmail.com), [Telegram](https://t.me/saniyar_dev)**
