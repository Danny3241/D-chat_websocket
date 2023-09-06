import { Injectable } from "@nestjs/common";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { Chat } from "./chat.entity";

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat) private readonly chatModel: ReturnModelType<typeof Chat>,
    ) {}
    
    async getChats(): Promise<Chat[]> {
        return await this.chatModel.find();
    }

    async saveChat(chat: Chat): Promise<void> {
        await this.chatModel.create(chat);
    }
}