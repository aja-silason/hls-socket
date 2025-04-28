import { Module } from '@nestjs/common';
import { VoiceController } from './voice/voice.controller';

@Module({
  imports: [],
  controllers: [VoiceController],
  providers: [],
})
export class AppModule {}
