// Importamos las funciones necesarias de Firebase
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- TUS CLAVES REALES DE FIREBASE ---
// Aquí pegas lo que te muestra la pantalla de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnV00YwXEvnmdRa75PTF-m8VcBLrOKlu8",
  authDomain: "cellmedicals-web.firebaseapp.com",
  projectId: "cellmedicals-web",
  storageBucket: "cellmedicals-web.firebasestorage.app",
  messagingSenderId: "991901749184",
  appId: "1:991901749184:web:6a93b32d1318c4dd99c225"
};

// Iniciamos la conexión (con protección para que no falle al recargar)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };