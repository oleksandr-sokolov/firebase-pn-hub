import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  @Post('send')
  async sendNotification(
    @Body('token') token: string,
    @Body('message') message: string,
    @Body('title') title: string,
  ) {
    await this.firebaseAdminService.sendNotification(token, message, title);
    return { success: true };
  }
}
