import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAdminService {
  async sendNotification(
    token: string,
    message: string,
    title: string,
  ): Promise<void> {
    const payload = {
      notification: {
        title,
        body: message,
      },
      token,
    };

    try {
      await admin.messaging().send(payload);
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
