// import { Injectable } from '@nestjs/common';
// import {
//   MessageBody,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
// } from '@nestjs/websockets';

// import { Socket, Server } from 'socket.io';

// @Injectable()
// @WebSocketGateway(3002, { cors: { origin: '*' } })
// export class ChatGateWay implements OnGatewayConnection, OnGatewayDisconnect {
//   private connectedClients: {
//     [key: string]: { socket: Socket; role: string };
//   } = {};
//   @WebSocketServer() server: Server;
//   handleConnection(client: Socket, ...args: any[]) {
//     const userId = client.handshake.query.userId;
//     const userRole = client.handshake.query.userRole;
//     if (Array.isArray(userId) || Array.isArray(userRole)) {
//       throw new Error(
//         'client-id or user-role must be string but received arrary',
//       );
//     }
//     this.connectedClients[userId] = { socket: client, role: userRole };
//     this.server.emit(
//       'newUserJoin',
//       `new ${userRole}:${client.id} join the chat`,
//     );
//   }
//   handleDisconnect(client: Socket) {
//     const userId = Object.keys(this.connectedClients).find(
//       (id) => this.connectedClients[id].socket == client,
//     );
//     if (userId) {
//       this.server.emit(
//         'userLeft',
//         `${this.connectedClients[userId].role}:${client.id} left the chat`,
//       );
//       delete this.connectedClients[userId];
//     }
//   }

//   @SubscribeMessage('newMessageTesting')
//   handleNewMessage(client: Socket, message: any) {
//     console.log(message);
//     client.emit('reply', 'This is a reply');
//     this.server.emit('reply', 'broadcasting..');
//   }

//   @SubscribeMessage('orderReady')
//   handleOrderReady(client: Socket, message: any) {
//     console.log(message);
//   }

//   public setNewOrder(message: string, clientId?: string) {
//     console.log(message);
//     if (clientId) {
//       this.server.to(clientId).emit('newOrderReceived', message);
//     } else {
//       this.server.emit('newOrderReceived', message);
//     }
//   }
// }
