import {
auth,
db
}
from "./firebase.js";

import {
createUserWithEmailAndPassword,
updateProfile
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
doc,
getDoc,
setDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document
.getElementById("btnCadastro")
.addEventListener("click", cadastrar);

async function cadastrar(){

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const credencial = await createUserWithEmailAndPassword(auth, email, password);

  const user = credencial.user;

  await updateProfile(user, {
    displayName: username
  });

  // salva usuário
  await setDoc(doc(db,"usuarios", user.uid), {
    username,
    email
  });

  // reserva username (SEM checagem no Firestore antes!)
  await setDoc(doc(db,"usernames", user.uid), {
    username
  });

  alert("Conta criada!");

  window.location.href = "login.html";
}