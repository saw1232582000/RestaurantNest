import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class ChatGateWay implements OnGatewayConnection, OnGatewayDisconnect {
    private connectedClients;
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleNewMessage(client: Socket, message: any): void;
    handleOrderReady(client: Socket, message: any): void;
    setNewOrder(message: string, clientId?: string): void;
}
