// Guarda informació teua com nom, cognoms, email, etc en local storage i després accedeix a ella.

// Guardar en local storage
localStorage.setItem("nom", "Jesús");
localStorage.setItem("cognoms", "Gutiérrez Sánchez");
localStorage.setItem("email", "chusgutierrez80@gmail.com");
localStorage.setItem("dni", "73580038W");
localStorage.setItem("telefon", "696461474");

// Accedir desde local storage
var nom = localStorage.getItem('nom');
var cognoms = localStorage.getItem('cognoms');
var email = localStorage.getItem('email');
var dni = localStorage.getItem('dni');
var telefon = localStorage.getItem('telefon');
console.log("Nom:", nom);
console.log("Cognoms:", cognoms);
console.log("email:", email);
console.log("DNI:", dni);
console.log("Teléfon:", telefon);

// Fes-ho ara amb cookies i fes que expire en un dia. Quan no poses data d'expiració a una cookie expira en tancar la sessió? Comprova-ho...
// Sense data no expiren les cookies al tancar la sessio.

// document.cookie = "nom=Jesús";
// document.cookie = "cognoms=Gutiérrez Sánchez";
// document.cookie = "email=Gutiérrez";
// document.cookie = "dni=73580038W";
// document.cookie = "telefon=696461474";

document.cookie = "nom=Jesús; expires=Fri, 09 Nov 2024 09:03:00 UTC";  
document.cookie = "cognoms=Gutiérrez Sánchez; expires=Fri, 09 Nov 2024 09:03:00 UTC";
document.cookie = "email=Gutiérrez; expires=Fri, 09 Nov 2024 09:03:00 UTC";
document.cookie = "dni=73580038W; expires=Fri, 09 Nov 2024 09:03:00 UTC";
document.cookie = "telefon=696461474; expires=Fri, 09 Nov 2024 09:03:00 UTC";

console.log("------------------------------------------cookies---------------------------------------")

var totes_les_cookies = document.cookie;
var cookies_separades = totes_les_cookies.split('; ');
for (var i = 0; i < cookies_separades.length; i++) {
    var cookie = cookies_separades[i];
    var [nom, valor] = cookie.split('=');
    console.log(nom + ": " + valor);
}


