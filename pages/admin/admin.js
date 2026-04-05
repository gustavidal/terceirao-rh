import { DISCIPLINAS } from "../../api/disciplinas.js"
import { db } from "../../firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"

window.showTab = function (tabId, event) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".sidebar button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");

    event.currentTarget.classList.add("active");
}

// preencher disciplinas
const select = document.getElementById("disciplina")

DISCIPLINAS.forEach(d => {
    const option = document.createElement("option")
    option.value = d.id
    option.textContent = d.disciplina
    select.appendChild(option)
})

// salvar evento
const form = document.getElementById("formEvento")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const titulo = document.getElementById("titulo").value
    const data = document.getElementById("data").value
    const disciplinaId = Number(select.value)
    const disciplinaNome = select.options[select.selectedIndex].text

    await addDoc(collection(db, "eventos"), {
        titulo,
        data,
        disciplinaId,
        disciplinaNome,
        criadoEm: new Date()
    })

    alert("Evento salvo!")

    form.reset()
})