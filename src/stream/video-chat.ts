import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway(3001, {cors: {origin: '*'}})
export class VideoChatGateway {

    @SubscribeMessage('join')
    handleJoinRoom (client: Socket, @MessageBody() room: string) {
        client.join(room);
    }

    @SubscribeMessage('offer')
    handleOffer(client: Socket, @MessageBody() offer: any){
        client.to(offer?.target).emit('offer', offer);
    }

    @SubscribeMessage('answer')
    handleAnswer(client: Socket, @MessageBody() answer: any){
        client.to(answer.target).emit('answer', answer);
    }

    @SubscribeMessage('candidate')
    handleCandidate(client: Socket, @MessageBody() candidate: any){
        client.to(candidate.target).emit('candidate', candidate);
    }



}
