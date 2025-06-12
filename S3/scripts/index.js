function createCell(number) {
  let div = document.createElement("div"); //creiamo il div per
  div.classList.add("cella"); // assegnamo la classe cella per il design
  div.setAttribute("numero", numero + 1); // assegnamo un attributo custom per riprendere la cella successivamente
  div.innerText = numero + 1; // diamo il testo del div con il numero corretto
  return div;
}

let numeriUsciti = [];

window.addEventListener("load", function (e) {
  const container = document.getElementById("container");
  if (!container) return; // se non c'è container, non andare avanti

  for (let i = 0; i < 76; i++) {
    // cicliamo 76 volte per generare le celle della tombola
    let div = createCell(i); // semplifichiamo attraverso una funzione per riutilizzo codice
    container.appendChild(div); // mettiamo il div dentro il container nell'ultima posizione
  }

  let estraiBtn = document.getElementById("estrai");
  if (!estraiBtn) return; // se non c'è estraiBtn, non andare avanti

  estraiBtn.addEventListener("click", function (e) {
    e.preventDefault(); // previene un uso default del browser

    let random;

    if (numeriUsciti.length == 76) {
      // controlliamo che i numeri siano usciti tutti, se si mostriamo un'alert e ci fermiamo
      confirm("Hai estratto tutti i numeri!");
      return;
    }
    do {
      // Esegue prima il codice e poi controlla se la condizione è true o false
      random = Math.ceil(Math.random() * 76);
    } while (numeriUsciti.includes(random)); // continua il ciclo finche il numero random non è contenuto nell'arrayUsciti
    numeriUsciti.push(random); // Aggiungiamo il numero all'arrayUsciti

    let cella = document.querySelectorAll(`.cella[numero="${random}"]`); // prendiamo la cella dall'html attraverso l'attributo numero
    if (cella[0]) {
      // Se la cella esiste
      cella[0].classList.add("selected"); // aggiungiamo la classe selected
    }
  });
});
