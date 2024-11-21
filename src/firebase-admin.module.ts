import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseAdminService } from './firebase-admin.service';
import * as serviceAccount from '../firebase-config.json';

@Module({
  providers: [FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class FirebaseAdminModule {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }
}
