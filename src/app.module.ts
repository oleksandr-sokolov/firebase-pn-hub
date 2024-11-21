import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAdminModule } from './firebase-admin.module';
import { NotificationsController } from './firebase-admin.controller';

@Module({
  imports: [FirebaseAdminModule],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
