let notes = [];

// Formulaire
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.trim() === "" || email.trim() === "") {
    document.getElementById("formMessage").textContent = "Veuillez remplir tous les champs.";
    document.getElementById("formMessage").style.color = "red";
  } else {
    document.getElementById("formMessage").textContent = `Merci ${name}, votre email ${email} a été reçu !`;
    document.getElementById("formMessage").style.color = "green";
  }
});

// Convertisseur
function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("currency").value);
  const result = document.getElementById("conversionResult");

  if (isNaN(amount)) {
    result.textContent = "Veuillez entrer un montant valide.";
    result.style.color = "orange";
    return;
  }

  const converted = (amount * rate).toFixed(2);
  result.textContent = `Résultat : ${converted}`;
  result.style.color = "green";
}

// Calculatrice scientifique
function calculate() {
  const input = document.getElementById("calcInput").value;
  const result = document.getElementById("calcResult");

  try {
    if (input.trim() === "") {
      result.textContent = "Veuillez entrer une expression.";
      result.style.color = "orange";
    } else {
      // Utilise Function au lieu de eval (plus sûr)
      const output = Function('"use strict"; return (' + input + ')')();
      result.textContent = "Résultat : " + output;
      result.style.color = "green";
    }
  } catch (error) {
    result.textContent = "Erreur dans l'expression.";
    result.style.color = "red";
  }
}

// Moyenne des notes
function addNote() {
  const input = document.getElementById("noteInput");
  const value = parseFloat(input.value);

  if (isNaN(value) || value < 0 || value > 20) {
    alert("Veuillez entrer une note valide entre 0 et 20.");
    return;
  }

  notes.push(value);
  updateNoteList();
  input.value = "";
}

function updateNoteList() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = `Note ${index + 1} : ${note}`;
    list.appendChild(li);
  });
}

function calculateAverage() {
  const result = document.getElementById("averageResult");
  if (notes.length === 0) {
    result.textContent = "Aucune note ajoutée.";
    result.style.color = "red";
    return;
  }
  const total = notes.reduce((a, b) => a + b, 0);
  const average = (total / notes.length).toFixed(2);
  result.textContent = `Moyenne : ${average}/20`;
  result.style.color = "#28a745";
}

// Changer de thème
function toggleTheme() {
  document.body.classList.toggle("dark");
}
