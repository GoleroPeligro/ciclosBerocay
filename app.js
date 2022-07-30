// Algoritmo para crear un poema

let otraFrase;
let frase = prompt("Ingrese una palabra o frase para comenzar el poema");

do {
    otraFrase = prompt("Ingrese otra frase o palabra para continuar o un punto para finalizar el poema");
    if (otraFrase == "."){
        frase = frase;
    } else {
    frase = frase + "\n" + otraFrase;
    }

} while (otraFrase != ".");

alert (frase);