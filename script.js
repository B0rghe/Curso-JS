let articulo = parseInt(prompt("Ingrese numero de articulo, del 1 al 5:"));
let cantidad = parseInt(prompt("Ingrese la cantidad:"));
function obtengoPrecio(articulo){
    if ((articulo > 0) && (articulo < 6)){
        switch (articulo) {
            case 1:
                precio = 150;
                break;
            case 2:
                precio = 250;
                break;
            case 3:
                precio = 350;
                break;
            case 4:
                precio = 450;
                break;
            case 5:
                precio = 550;
                break;
            default:
                break;
        }
        return precio;
    }else {
        alert("Codigo articulo invalido");
    }
}
function calculoCuota(precio, cantidad, cuotas) {
    if (cuotas > 1) {
        const precioCuota = (precio * cantidad) / cuotas;
        console.log("Debe abonar " + cuotas + " cuotas de:")
        return precioCuota;
    }else if (cuotas == 1) {
        const precioTot = precio * cantidad;
        console.log("El precio total es:")
        return precioTot;
    }
}
console.log(calculoCuota(obtengoPrecio(articulo), cantidad, parseInt(prompt("Ingrese en cuantas cuotas desea abonar:"))))