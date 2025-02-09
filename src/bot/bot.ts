import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("messageCreate", () => {
    console.log("Test: Someone sent a message.");
})

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);