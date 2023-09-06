import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/chat.entity';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://127.0.0.1/chatapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    TypegooseModule.forFeature([Chat]),
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
