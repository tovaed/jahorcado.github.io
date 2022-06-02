String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

function soloLetras(e) {
    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toUpperCase(),
        letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

const palabras = ["COMPUTADORA", "PERRO", "ALURA", "EDUCACION", "FELICIDAD", "PICO", "JARABE", "PESCADERA", "PRODUCIR", "CANTANTE", "CALABOZO", "PARARRAYOS", "COCTELERA", "REGALOS", "ENCONTRARSE", "ARGENTINO", "RADIADOR", "VOLEIBOL"];
console.log(palabras);

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
console.log(palabra);

const fallos = [];

let palabraconGuion = palabra.replace(/./g, "_ ");
console.log(palabraconGuion);
let contFallos = 0;
document.querySelector("#salida").innerHTML = palabraconGuion;


document.querySelector("#calcular").addEventListener("click", () => {
    const letra = document.querySelector("#letra").value;
    const letra2 = letra.toUpperCase();
    let haFallado = true;
    if (letra2 == "") {
        alert("Ingresa una letra")
    } else {
        for (const i in palabra) {
            if (letra2 == palabra[i]) {
                palabraconGuion = palabraconGuion.replaceAt(i * 2, letra2);
                haFallado = false;
            }
        }
        if (haFallado) {
            for (let i = 0; i < fallos.length; i++) {
                if (letra2 == fallos[i]) {
                    alert("Estas usando la misma letra")
                    contFallos = contFallos - 1;
                }

            }
            contFallos++;
            console.log("calcular fallos " + contFallos);
            document.querySelector("#ahorcado").style.backgroundPosition = -(290 * contFallos) + 'px 0';
            fallos.push(letra2);
            document.querySelector("#letrasusadas").innerHTML = fallos;

            if (contFallos == 6) {
                document.querySelector("#ahorcado").style.display = "none";
                document.querySelector(".menujuego").style.display = "none";
                document.querySelector("#perdiste").style.display = "flex";
                document.querySelector("#secreto").innerHTML = palabra;
            }
        } else {
            if (palabraconGuion.indexOf("_") < 0) {
                document.querySelector("#ahorcado").style.display = "none";
                document.querySelector(".menujuego").style.display = "none";
                document.querySelector("#ganador").style.display = "flex";
            }
        }
        document.querySelector("#salida").innerHTML = palabraconGuion;

        document.querySelector("#letra").value = "";
        document.querySelector("#letra").focus();
    }

});

document.querySelector("#repetir").addEventListener("click", () => {
    const palabras = ["COMPUTADORA", "PERRO", "ALURA", "EDUCACION", "FELICIDAD", "PICO", "JARABE", "PESCADERA", "PRODUCIR", "CANTANTE", "CALABOZO", "PARARRAYOS", "COCTELERA", "REGALOS", "ENCONTRARSE", "ARGENTINO", "RADIADOR", "VOLEIBOL"];
    console.log(palabras);

    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabra);
    let palabraconGuion = palabra.replace(/./g, "_ ");
    console.log(palabraconGuion);
    console.log("repetir " + contFallos);
    for (let i = fallos.length; i > 0; i--) {
        fallos.pop();
    }
    document.querySelector("#salida").innerHTML = palabraconGuion;
    const letra = document.querySelector("#letra").value;
    const letra2 = letra.toUpperCase();
    let haFallado = true;
    for (const i in palabra) {
        if (letra2 == palabra[i]) {
            palabraconGuion = palabraconGuion.replaceAt(i * 2, letra2);
            haFallado = false;
        }
    }
    if (haFallado) {
        contFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(290 * contFallos) + 'px 0';
        fallos.push(letra2);
        document.querySelector("#letrasusadas").innerHTML = fallos;
        if (contFallos == 6) {
            document.querySelector("#ahorcado").style.display = "none";
            document.querySelector(".menujuego").style.display = "none";
            document.querySelector("#perdiste").style.display = "flex";
            document.querySelector("#secreto").innerHTML = palabra;
        }
    } else {
        if (palabraconGuion.indexOf("_") < 0) {
            document.querySelector("#ahorcado").style.display = "none";
            document.querySelector(".menujuego").style.display = "none";
            document.querySelector("#ganador").style.display = "flex";
        }
    }
    document.querySelector("#salida").innerHTML = palabraconGuion;

    document.querySelector("#letra").value = "";
    document.querySelector("#letra").focus();
});