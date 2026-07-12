/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocFromServer } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtngu97FnVgX1dYDe1u9avOYIsSUTsmVE",
  authDomain: "boxwood-meridian-znzsc.firebaseapp.com",
  projectId: "boxwood-meridian-znzsc",
  storageBucket: "boxwood-meridian-znzsc.firebasestorage.app",
  messagingSenderId: "921663032775",
  appId: "1:921663032775:web:3ef0779e4e96f7f320dde2"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with the custom database ID
export const db = getFirestore(app, "ai-studio-auraauthorstudio-fd23b804-5f5a-4db3-af0f-e48e332fe5b0");
export const auth = getAuth(app);

// Authenticate anonymously on startup
signInAnonymously(auth).catch((error) => {
  console.error("Failed to sign in anonymously:", error);
});

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. Client is offline.");
    }
  }
}

testConnection();
