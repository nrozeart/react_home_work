import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAy_0BNttYBniEazZZIQLsb_5xABzr6FoY',
  authDomain: 'gb-chats-c5c37.firebaseapp.com',
  projectId: 'gb-chats-c5c37',
  storageBucket: 'gb-chats-c5c37.appspot.com',
  messagingSenderId: '490107659528',
  appId: '1:490107659528:web:5c2d3f78e842d441a138bd',
};

const app = initializeApp(firebaseConfig);

export const firbaseAuth = getAuth(app);

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firbaseAuth, email, password);
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(firbaseAuth, email, password);
};

export const logOut = async () => await signOut(firbaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const postsRef = ref(db, 'posts');
export const getPostById = (postID) => ref(db, `posts/${postID}`);
