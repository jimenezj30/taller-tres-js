// con el  concat() nos permite hacer uniones de cadenas o de palabras  a la cadena original
const string1 = "Hola, ";
const string2 = "estudiantes!";
const resultado = str1.concat(str2);

console.log(resultado); // Salida: "Hola, estudiantes!"
//  que  la cual no va inprimier un mesaje  con las dos str1 y str2  que se van a unir a la cadena original


//ejercico con tres cadenas  

const str6 = "popayan";
const str7= "es ";
const str8 = "genial!";
const resultads= str1.concat(str2, str3);

console.log(resultads); // Salida: "popayan es genial!"

// en esta perte se puede trabajar con lo que es concat o '+' que la cual el + es mas legible a  la hora de tranajar  debido a su simplicidad 

const resultad = str6 + str7 + str8;
console.log(resultads); // Salida: "popayan es genial!"