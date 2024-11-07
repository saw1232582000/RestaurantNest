import { Module } from "@nestjs/common";
import { ChatGateWay } from "src/core/common/chat/ChatGateWay";



@Module({
    controllers: [],
    providers: [
      ChatGateWay
    ],
  })
  export class ChatModule {}