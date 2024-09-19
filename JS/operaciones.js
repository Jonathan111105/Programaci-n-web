alert("Hola mundo")
let n1, n2, suma, resta, multiplicacion, division;

n1=parseFloat(prompt("Inserta el primer numero"));
n2=parseFloat(prompt("ingresa el segundo numero"));

suma=n1+n2;
resta = n1-n2;
multiplicacion = n1*n2;
division = n1/n2;

alert("La suma de los numeros es " + suma);
alert("La resta de los numeros es " + resta);
alert("La multiplicacion de los numeros es " + multiplicacion);
alert("La division de los numeros es " + division);


if(n1<n2){
    alert("El " + n2 + " es mayor")
}
if(n1>n2){
    alert("El " + n1 + " es mayor")
}

let array=[1,2,3,4,5];
console.log(array)

array.push(2)
array.shift(1)
console.log(array)