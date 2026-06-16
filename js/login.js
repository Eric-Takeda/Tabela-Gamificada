import { auth }
from "./firebase.js";

import {
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document
.getElementById("btnLogin")
.addEventListener("click", login);

async function login(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try{

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    window.location.href =
    "index.html";

  }catch{

    alert("Login inválido");
  }
}