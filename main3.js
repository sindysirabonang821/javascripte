// Déclaration d'un tableau de 10 étudiants
let eleve = [
    { prenom: "Jean", nom: "Dupont", age: 20, note_js: 15 },
    { prenom: "Marie", nom: "Martin", age: 21, note_js: 18 },
    { prenom: "Pierre", nom: "Lefevre", age: 19, note_js: 12 },
    { prenom: "Sophie", nom: "Robert", age: 22, note_js: 14 },
    { prenom: "Luc", nom: "Thomas", age: 20, note_js: 16 },
    { prenom: "Alice", nom: "Garcia", age: 21, note_js: 17 },
    { prenom: "François", nom: "Leroy", age: 19, note_js: 13 },
    { prenom: "Julie", nom: "Moreau", age: 22, note_js: 15 },
    { prenom: "Nicolas", nom: "Petit", age: 20, note_js: 18 },
    { prenom: "Camille", nom: "Sanchez", age: 21, note_js: 19 }
];
console.log(eleve[0].note_js); // Affiche 15

let etudiants = [
    { prenom: "jen", nom: "coly", age: 20, note_js: 15 },
    { prenom: "badiane", nom: "Martin", age: 21, note_js: 18 },
    { prenom: "diedhiou", nom: "lamine", age: 19, note_js: 12 },
    { prenom: "Sylla", nom: "mari", age: 22, note_js: 14 },
    { prenom: "sy", nom: "Toto", age: 20, note_js: 16 },
    { prenom: "mendy", nom: "lili", age: 21, note_js: 17 },
    { prenom: "ndiaye", nom: "Lala", age: 19, note_js: 13 },
    { prenom: "cisse", nom: "Mamy", age: 22, note_js: 15 },
    { prenom: "coly", nom: "Petit", age: 20, note_js: 18 },
    { prenom: "diop", nom: "Sara", age: 21, note_js: 19 }
];

let tbody = document.querySelector('tbody');

etudiants.forEach(etudiant => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${etudiant.prenom}</td>
        <td>${etudiant.nom}</td>
        <td>${etudiant.age}</td>
        <td>${etudiant.note_js}</td>
    `;
    tbody.appendChild(tr);
});