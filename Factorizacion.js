let Num = Number(prompt("Ingresa un número para calcular su factorial:"));

if (isNaN(Num) || Num < 1) {
    document.getElementById("resultado").textContent =
        "Error: Debes ingresar un número válido mayor o igual a 1.";
} else {
    let factorial = 1;

    for (let i = 1; i <= Num; i++) {
        factorial = factorial * i;
    }

    document.getElementById("resultado").textContent =
        `El factorial de ${Num} es: ${factorial}`;
}