import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";

@Controller('voice')
export class VoiceController {

    @Post()
    handleCall(@Body() body: any, @Res() res: Response){

        const digits = body.Digits;

        let responseText: string;

        if(!digits){
            responseText = 'Bem vindo ao URA da AJASOFT'
        } else if(digits === 1) {
            responseText = 'Voce selecionou encontrar-me'
        } else if(digits === 2) {
            responseText = 'Voce selecionou viajar para a Zâmbia'
        } else if(digits === '*') {
            responseText = 'Foi um prazer conhecer você, até já!'

        } else {
            responseText = 'Resposta inválida'
        }

        const twiml = `
            <Response>
                <Gather input="dtmf" timeout="5" numDigits="1" action="/voice">
                    <Say>${responseText}</Say>
                <Gather>
            </Response>
        `;

        res.set('Content-Type', 'text/xml');
        res.send(twiml.trim());

    }

}