let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let anio = parseInt(prompt("Hola " + nombre + " " + apellido + "! Por favor ingresa el año de tu nacimiento:"));
let resultado = (2021 - anio);

if (resultado < 18){
    alert ("Que bueno que con " + resultado + " años quieras aprender Javascript");    
}else if ((resultado >= 18) && (resultado <= 35)){
    alert ("Muy buena decisión estudiar Javascript a los " + resultado + " años.");
}else if (resultado > 35){
    alert("Vaya, parece que ya tienes " + resultado + " años, pero no importa, nunca es tarde para estudiar Javascript!");
}else{
    alert("Vaya, parece que no ingresaste un año valido. Recarga la página y vuelve a intentarlo.")
}