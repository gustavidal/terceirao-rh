'use strict'

import { DISCIPLINAS } from "../../api/disciplinas.js"

window.showTab = function(tabId, event) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".sidebar button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");

    event.currentTarget.classList.add("active");
}