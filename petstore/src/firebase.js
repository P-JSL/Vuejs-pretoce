import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDENyUepQFRRj6wm71vvnzjjw8BoMIzbyc",
  authDomain: "nuxt-pratice.firebaseapp.com",
  projectId: "nuxt-pratice",
  storageBucket: "nuxt-pratice.appspot.com",
  messagingSenderId: "438228211297",
  appId: "1:438228211297:web:36f8ec844eda457d243c20",
  measurementId: "G-H816G7NH9F"
})

export const db = app.databases();

export const productsRef = db.ref('products');
