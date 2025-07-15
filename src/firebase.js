import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlnJP5DKKYdOq6yLAJQhQHUwu5DvrpNhs",
  authDomain: "learn-it-website.firebaseapp.com",
  projectId: "learn-it-website",
  storageBucket: "learn-it-website.appspot.com",
  messagingSenderId: "419758423324",
  appId: "1:419758423324:web:7adc96e0761ea34af60ed9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
