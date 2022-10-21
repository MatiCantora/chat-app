// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDYgGN340cFvyZcMqzW158Ii3VNbwFWsCY",
	authDomain: "chat-app-89c3d.firebaseapp.com",
	projectId: "chat-app-89c3d",
	storageBucket: "chat-app-89c3d.appspot.com",
	messagingSenderId: "258795250840",
	appId: "1:258795250840:web:2b8541312b3a3e82e85ced",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
