import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';

@WebSocketGateway(3002, { cors: { origin: '*' } })
export class ChatGateWay implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(client: Socket, ...args: any[]) {
    this.server.emit('newUserJoin', `${client.id} join the chat`);
  }
  handleDisconnect(client: Socket) {
    this.server.emit('userLeft', `${client.id} left the chat`);
  }
  @WebSocketServer() server: Server;

  @SubscribeMessage('newMessageTesting')
  handleNewMessage(client: Socket, message: any) {
    console.log(message);
    client.emit('reply', 'This is a reply');
    this.server.emit('reply', 'broadcasting..');
  }
}
