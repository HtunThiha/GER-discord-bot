import { ApplicationCommandOptionType } from "discord.js"
import { REST, Routes } from "discord.js"
import { config } from "dotenv"

config();

type Command = {
    name: string,
    type: ApplicationCommandOptionType,
    description: string,
    options?: Option[]
}

type Option = {
    name: string,
    description: string,
    type: ApplicationCommandOptionType,
    required: boolean,
    choices?: Choice[]
}

type Choice = {
    name: string,
    value: string
}

const HELLO_COMMAND: Command = {
    name: "hello",
    "description": "Say hello to GER",
    type: ApplicationCommandOptionType.Subcommand
}





const ALL_COMMANDS: Command[] = [
    HELLO_COMMAND
];

const rest = new REST({version: "10"}).setToken(process.env.BOT_TOKEN);

async function executeRegisterCommands() {
    try {
        console.log("🔄 Registering commands...");

        await rest.put(
            Routes.applicationCommands(process.env.APP_ID),
            {body: ALL_COMMANDS}
        ).then(res => console.log("\n🔥 Output: \n", res));

        console.log("\n✅ Slash commands registered successfully.");
    } catch (error) {
        console.error("\n❌ Error creating slash commands: \n", error);   
    }
}

executeRegisterCommands();