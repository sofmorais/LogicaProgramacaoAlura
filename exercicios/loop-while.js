// Crie um contador que comece em 1 e vá até 10 usando um loop while
let contador = 1;
let limite = 10; 
while (contador <= limite) {
    console.log(contador);
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while
let contador1 = 10;
let limite1 = 0; 
while (contador1 >= limite1) {
    console.log(contador1);
    contador1--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0
let numero = prompt("Digite um número");
while(numero >= 0) {
    console.log(numero)
    numero--
} 

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número
let contador2 = 0;
let numero1 = prompt("Digite um número");
while(contador2 <= numero1) {
    console.log(contador2)
    contador2++
}