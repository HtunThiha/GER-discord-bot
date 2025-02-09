import { EmbedBuilder, InteractionResponseType } from "discord.js";
import { config } from "dotenv";

config();

const internalServerErrorEmbed = () => {
    return new EmbedBuilder()
        .setColor(0xb8173e)
        .setTitle(`${process.env.EMOJI_GER_STARE}  An Unexpected Error Occurred`)
        .setDescription(`No one before me shall ever reach the truth. I will reverse this as soon as possible.`);
}

const unregisteredCommand = (commandName: string) => {
    const embed = new EmbedBuilder()
        .setColor(0xdf7439)
        .setTitle(`Command /${commandName} is not registed yet.`)
        .setDescription("This command is still under development. Try again later to use it!");

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            embeds: [embed]
        }
    }
}

const helloEmbed = (username: string) => {
    const embed = new EmbedBuilder()
        .setColor(0xadaa77)
        .setTitle(`Hello, ${username}`)
        .setDescription("I am Gold Experience Requiem, known as GER. Korega Requiem Da.");

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            embeds: [embed]
        }
    }
}


export default {
    internalServerErrorEmbed,
    helloEmbed,
    unregisteredCommand
}