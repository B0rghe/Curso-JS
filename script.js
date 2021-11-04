let ingreso = parseInt(prompt("Ingrese un número entre 0 y 1000"));
let numero = ingreso;
let pares = 0;
for (let i = 1; i <= ingreso; i++){
    if ((numero % 2) == 0){
        pares++;
    }
    numero--;
}
if (pares > 1){
    alert("Hay " + pares + " números pares entre 0 y " + ingreso);
}else{
    alert("Hay " + pares + " número par entre 0 y " + ingreso);
}