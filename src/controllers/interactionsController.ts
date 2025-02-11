import { Request, Response, NextFunction } from "express";
import { APIInteraction, InteractionType } from "discord.js";
import embeds from "../components/embeds.ts";

const handleDiscordInteractionRequests = (req: Request, res: Response, next: NextFunction) => {

    try {
        const interaction: APIInteraction = req.body;
        const {type, data} = interaction;
    
        if (type === InteractionType.ApplicationCommand) {
            
            const { name } = data;
            const currentNickname = interaction.member.nick ?? interaction.member.user.global_name;
    
            switch (name) {
                case "hello":
                    res.status(200).json(embeds.helloEmbed(currentNickname));
                    break;
            
                default:
                    res.status(200).json(embeds.commandUnderMaintenanceEmbed(name));
                    break;
            }
        }
    } catch (error) {
        console.error("Error at handleDiscordInteractionRequests: \n", error);
        res.status(200).json(embeds.internalServerErrorEmbed());
    }
}

export default handleDiscordInteractionRequests;