import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC1wDyUwCJ6VLMkK3AJWkrzC3l7S2xtF-c",
    authDomain: "projetos-eric.firebaseapp.com",
    projectId: "projetos-eric",
    storageBucket: "projetos-eric.firebasestorage.app",
    messagingSenderId: "69788011773",
    appId: "1:69788011773:web:ae7431e091586746a74294"
  };

  const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const db =
getFirestore(app);