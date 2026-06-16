import { signOut }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth }
from "./firebase.js";

document
.getElementById("logout")
.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";
});