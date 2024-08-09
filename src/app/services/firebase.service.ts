// src/app/firebase.service.ts

import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";

const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBgVkSezdTOgLSa7Gkt0qK_FvfFLjzqg4U",
    authDomain: "technews-97be4.firebaseapp.com",
    projectId: "technews-97be4",
    storageBucket: "technews-97be4.appspot.com",
    messagingSenderId: "22067569925",
    appId: "1:22067569925:web:8a95a6eb6f7cfb0a3c436c"
  }
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: any;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
  }
}
