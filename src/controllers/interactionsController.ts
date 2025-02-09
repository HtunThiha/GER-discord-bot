import { Request, Response, NextFunction } from "express";
import { APIInteraction, InteractionType } from "discord.js";
import embeds from "../components/embeds.ts";

const handleDiscordInteractionRequests = (req: Request, res: Response, next: NextFunction) => {

    try {
        const interaction: APIInteraction = req.body;
        const {type, data} = interaction;
    
        if (type === InteractionType.ApplicationCommand) {
            
            const { name } = data;
    
            switch (name) {
                case "hello":
                    const currentNickname = (interaction.member.nick == null) ? interaction.member.user.global_name : interaction.member.nick;
                    res.json(embeds.helloEmbed(currentNickname));
                    break;
            
                default:
                    res.json(embeds.unregisteredCommand(name));
                    break;
            }
        }
    } catch (error) {
        console.error("Error at handleDiscordInteractionRequests: \n", error);
        res.json(embeds.internalServerErrorEmbed());
    }
}

export default handleDiscordInteractionRequests;