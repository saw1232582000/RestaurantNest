"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateWay = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatGateWay = class ChatGateWay {
    constructor() {
        this.connectedClients = {};
    }
    handleConnection(client, ...args) {
        const userId = client.handshake.query.userId;
        const userRole = client.handshake.query.userRole;
        if (Array.isArray(userId) || Array.isArray(userRole)) {
            throw new Error('client-id or user-role must be string but received arrary');
        }
        this.connectedClients[userId] = { socket: client, role: userRole };
        this.server.emit('newUserJoin', `new ${userRole}:${client.id} join the chat`);
    }
    handleDisconnect(client) {
        const userId = Object.keys(this.connectedClients).find((id) => this.connectedClients[id].socket == client);
        if (userId) {
            this.server.emit('userLeft', `${this.connectedClients[userId].role}:${client.id} left the chat`);
            delete this.connectedClients[userId];
        }
    }
    handleNewMessage(client, message) {
        console.log(message);
        client.emit('reply', 'This is a reply');
        this.server.emit('reply', 'broadcasting..');
    }
    handleOrderReady(client, message) {
        console.log(message);
    }
    setNewOrder(message, clientId) {
        console.log(message);
        if (clientId) {
            this.server.to(clientId).emit('newOrderReceived', message);
        }
        else {
            this.server.emit('newOrderReceived', message);
        }
    }
};
exports.ChatGateWay = ChatGateWay;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('newMessageTesting'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateWay.prototype, "handleNewMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('orderReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateWay.prototype, "handleOrderReady", null);
exports.ChatGateWay = ChatGateWay = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)(3002, { cors: { origin: '*' } })
], ChatGateWay);
//# sourceMappingURL=ChatGateWay.js.map