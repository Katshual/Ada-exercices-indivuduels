// Demander le nom de l'utilisateur
let userName = prompt("Quel est votre nom ?");

// Concaténer le message de bienvenue
let welcomeMessage = "👋 Bonjour " + userName;

// Ajouter le message de bienvenue à la page HTML
document.body.innerHTML += '<h2>' + welcomeMessage + '</h2>';
//Demander l'année de naissance de l'utilisateur
let birthYear = prompt("Quelle est votre année de naissance ?");

// Calculer l'âge de l'utilisateur
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

// Ajouter l'âge de l'utilisateur à la page HTML
document.body.innerHTML += '<h3>Vous avez ' + age + ' ans</h3>';
// Fonction pour demander le nom
function askName() {
    let userName = prompt("Quel est votre nom ?");
    let welcomeMessage = "👋 Bonjour " + userName;
    document.body.innerHTML += '<h2>' + welcomeMessage + '</h2>';
}

// Fonction pour demander l'année de naissance
function askBirthYear() {
    let birthYear = prompt("Quelle est votre année de naissance ?");
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    document.body.innerHTML += '<h3>Vous avez ' + age + ' ans</h3>';
}

// Appeler les fonctions
askName();
askBirthYear();
// Fonction pour demander le nom
function askName() {
    let userName = prompt("Quel est votre nom ?");
    let welcomeMessage = "👋 Bonjour " + userName;
    document.body.innerHTML += '<h2>' + welcomeMessage + '</h2>';
}

// Fonction pour demander l'année et le mois de naissance
function askBirthYear() {
    let birthYear = prompt("Quelle est votre année de naissance ?");
    let birthMonth = prompt("Quel est votre mois de naissance ? (1-12)");

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1; // getMonth() retourne 0 pour janvier

    let age = currentYear - birthYear;
    if (currentMonth < birthMonth) {
        age--;
    }

    document.body.innerHTML += '<h3>Vous avez ' + age + ' ans</h3>';
}

// Appeler les fonctions
askName();
askBirthYear();

