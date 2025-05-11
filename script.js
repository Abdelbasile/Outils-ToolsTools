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

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("conversionResult").textContent = "Veuillez entrer un montant valide.";
    document.getElementById("conversionResult").style.color = "red";
  } else {
    const result = (amount * rate).toFixed(2);
    document.getElementById("conversionResult").textContent = `Résultat : ${result}`;
    document.getElementById("conversionResult").style.color = "green";
  }
}

// Calculatrice scientifique
function calculate() {
  const expression = document.getElementById("calcInput").value;
  
  if (/[^0-9+\-*/(). ]/.test(expression)) {
    document.getElementById("calcResult").textContent = "Expression invalide.";
    document.getElementById("calcResult").style.color = "red";
    return;
  }
  
  try {
    const result = new Function('return ' + expression)();
    document.getElementById("calcResult").textContent = `Résultat : ${result}`;
    document.getElementById("calcResult").style.color = "green";
  } catch (e) {
    document.getElementById("calcResult").textContent = "Expression invalide.";
    document.getElementById("calcResult").style.color = "red";
  }
}

// Moyenne des notes
function addNote() {
  const note = parseFloat(document.getElementById("noteInput").value);
  if (!isNaN(note) && note >= 0) {
    notes.push(note);
    document.getElementById("noteInput").value = '';
    document.getElementById("averageResult").textContent = `Notes ajoutées : ${notes.join(', ')}`;
  } else {
    alert("Veuillez entrer une note valide.");
  }
}

function calculateAverage() {
  if (notes.length === 0) {
    document.getElementById("averageResult").textContent = "Aucune note ajoutée.";
    return;
  }
  const sum = notes.reduce((acc, note) => acc + note, 0);
  const average = (sum / notes.length).toFixed(2);
  document.getElementById("averageResult").textContent = `Moyenne : ${average}`;
}

// Changer de thème
function toggleTheme() {
  document.body.classList.toggle("dark");
}