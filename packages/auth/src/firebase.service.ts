import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";

export class FirebaseInstance {
  private static _instance: FirebaseInstance;

  private constructor() {
    return initializeApp({
      credential: admin.credential.cert({
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        project_id: process.env.FIREBASE_PROJECT_ID,
      } as Partial<admin.ServiceAccount>),
      databaseURL: process.env.FIREBASE_DATABASE_URL!,
    });
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }
}
