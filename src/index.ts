/*
Escriba un programa que pida al usuario dos números enteros,
 y luego retorne la suma de todos los números que están 
 entre ellos
Por ejemplo, si los números son 2 y 7, 
debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let num1, num2, mayor, mayor1, menor: number;
let suma: number = 0;
num1 = Number(prompt("Ingrese un número: "));
num2 = Number(prompt("Ingrese un número: "));

if (num1 > num2) {
  mayor = num1;
  menor = num2;
} else {
  mayor = num2;
  menor = num1;
}
mayor1 = mayor + 1;
suma = 0;
for (let i = menor; i < mayor1; i++) {
  suma = suma + i;
}

console.log("suma: " + suma);
