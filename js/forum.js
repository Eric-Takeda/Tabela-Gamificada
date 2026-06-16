import { auth, db } from "./firebase.js";


import {
collection,
addDoc,
onSnapshot,
deleteDoc,
doc,
updateDoc,
serverTimestamp,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const lista = document.getElementById("listaComentarios");
const texto = document.getElementById("textoComentario");
const btn = document.getElementById("btnPublicar");

let usuario = null;

onAuthStateChanged(auth, (user)=>{

    if(!user){
        location.href = "login.html";
        return;
    }

    usuario = user;
});

btn.addEventListener("click", async ()=>{

    if(!texto.value.trim()) return;

    await addDoc(
    collection(db,"comentarios"),
    {
        uid: usuario.uid,
        username: usuario.displayName ?? usuario.email.split("@")[0],
        texto: texto.value,
        criadoEm: serverTimestamp()
    }
);

    texto.value = "";
});

const q = query(
    collection(db,"comentarios"),
    orderBy("criadoEm","desc")
);

onSnapshot(q,(snapshot)=>{

    lista.innerHTML = "";

    snapshot.forEach((docSnap)=>{

        const dados = docSnap.data();

        const div = document.createElement("div");

        div.className = "comentario";

        div.innerHTML = `
            <h3>${dados.username}</h3>
            <p>${dados.texto}</p>
        `;

        if(usuario &&
           usuario.uid === dados.uid){

            const editar = document.createElement("button");
            editar.textContent = "Editar";
            editar.className = "btn-editar";

            editar.onclick = async ()=>{

                const novoTexto =
                prompt(
                  "Editar comentário:",
                  dados.texto
                );

                if(novoTexto){

                    await updateDoc(
                        doc(
                          db,
                          "comentarios",
                          docSnap.id
                        ),
                        {
                           texto: novoTexto
                        }
                    );
                }
            };

            const excluir = document.createElement("button");
            excluir.textContent = "Excluir";
            excluir.className = "btn-excluir";

            excluir.onclick = async ()=>{

                await deleteDoc(
                  doc(
                    db,
                    "comentarios",
                    docSnap.id
                  )
                );
            };

            div.appendChild(editar);
            div.appendChild(excluir);
        }

        lista.appendChild(div);
    });
});