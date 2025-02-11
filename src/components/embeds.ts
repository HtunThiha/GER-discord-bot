import { EmbedBuilder, InteractionResponseType } from "discord.js";

const commandUnderMaintenanceEmbed = (commandName: string) => {
    const embed = new EmbedBuilder()
        .setColor("Orange")
        .setTitle("🛠️  Command currently not available")
        .setDescription(`**/${commandName}** is currently under maintenance or development.\nPlease try again later to use it.`);

    return wrapEmbedsInResponse(embed);
}

const helloEmbed = (currentNickname: string) => {
    const helloDescription = `Korega Requiem Da. I am Gold Experience Requiem (GER).\n
My ability is to revert all actions and willpower of the enemies back to the state of "zero", completely nullifying them and preventing them from becoming "real".\n
**[Learn more about GER](https://jojo.fandom.com/wiki/Gold_Experience_Requiem)**
`;

    const embed = new EmbedBuilder()
        .setColor(0x989262)
        .setTitle(`**Welcome, ${currentNickname}**`)
        .setDescription(helloDescription)
        .setImage(process.env.HELLO_EMBED_IMAGE);

    return wrapEmbedsInResponse(embed);
}

const internalServerErrorEmbed = () => {
    const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle(`**An Unexpected Error Occurred.**`)
        .setDescription("Please try again later. We will be resolving this issue ASAP.")
        .setThumbnail(process.env.INTERNAL_SERVER_ERROR_EMBED_THUMBNAIL);

    return wrapEmbedsInResponse(embed);
}

const wrapEmbedsInResponse = (...embeds: EmbedBuilder[]) => {

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            embeds: [...embeds]
        }
    }
}

export default {
    commandUnderMaintenanceEmbed,
    helloEmbed,
    internalServerErrorEmbed
}