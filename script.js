
class producto{
    constructor(tipo, nombre, precio){
        this.tipo = tipo
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Cafeteria
const azucar = new producto("cafeteria", "azucar", 300);
const te = new producto("cafeteria", "te", 266);
const cafe = new producto("cafeteria", "cafe", 253);
const yerbaMate = new producto("cafeteria", "yerba mate", 600);
const leche = new producto("cafeteria", "leche", 358);
const edulcorante = new producto("cafeteria", "edulcorante", 320);

//Golosinas
const chocolate = new producto("golosinas", "chocolate", 500);
const alfajor = new producto("golosinas", "alfajor", 250);
const chicle = new producto("golosinas", "chicle", 120);
const caramelo = new producto("golosinas", "caramelo", 20);

//Higiene | Baño
const papelHigenico = new producto("higiene", "papel higienico", 543);
const jabon = new producto("higiene", "jabon", 200);
const shampoo = new producto("higiene", "shampoo", 470);
const acondicionador = new producto("higiene", "acondicionador", 450);
const perfume = new producto("higiene", "perfume", 800);


//Herramientas de Cocina
const papelDeCocina = new producto("instrumentos de cocina", "papel de cocina", 630);
const repasador = new producto("instrumentos de cocina", "repasador", 700);
const esponjaDeConina = new producto("instrumentos de cocina", "esponja", 200);

//Fieambreria
const queso = new producto("fieambreria", "queso", 400);
const jamon = new producto("fieambreria", "jamon", 550);
const mortadela = new producto("fieambreria", "mortadela", 610);

//Panaderia
const pan = new producto("panaderia", "pan", 600);
const galletitas = new producto("panaderia", "galletitas", 430);
const medialunas = new producto("panaderia", "medialunas", 900);

//Frutas y Verduras 
const papa = new producto("frutas y verduras", "papa", 300);
const tomate = new producto("frutas y verduras", "tomate", 590);
const lechuga = new producto("frutas y verduras", "lechuga", 230);
const zanaoria = new producto("frutas y verduras", "zanahoria", 600);
const arroz = new producto("frutas y verduras", "arroz", 355);
const manzana = new producto("frutas y verduras", "manzana", 485);

//ComidaGeneral
const aceite = new producto("comida", "aceite", 630);
const mayonesa = new producto("comida", "mayonesa", 280);
const fideos = new producto("comida", "fideos", 364);
const miel = new producto("comida", "miel", 451);

//Carnes
const carne = new producto("carnes", "carne", 1400);
const pollo = new producto("carnes", "pollo", 1100);
const pescado = new producto("carnes", "pescado", 1600);
const lataAtun = new producto("carnes", "lata de atun", 587);
const lataAnchoas = new producto("carnes", "lata de anchoas", 563);


//-------------Array contenedor de productos--------------//
const productosTienda =[carne, pollo, pescado, lataAnchoas, lataAtun, aceite, mayonesa, fideos, miel, papa, tomate, lechuga, zanaoria, arroz, manzana, pan, galletitas, medialunas, queso, mortadela, jamon, papelDeCocina, repasador, esponjaDeConina, cafe, te, azucar, edulcorante, leche, yerbaMate, papelHigenico, jabon, shampoo, acondicionador,perfume, chocolate, chicle, alfajor, caramelo];







//---------------------Logica a desarrollar---------------------//


//while()
// function valorProducto(objeto, nomProduc){
//     if
//     let variable1 = objeto.filter((fun) => fun.)
// }

function filtroObjetos(objeto, categoria ){
    let variable1 = objeto.filter((fun1) => fun1.tipo.includes(categoria));
    let variable2 = variable1.map((fun2) => fun2.nombre + " " + fun2.precio + "$");
    return variable2;
}

function valorProducto(objeto, nomProd){
    let variable1 = objeto.filter((fun1) => fun1.nombre.includes(nomProd));
    let variable2 = variable1.map((fun2) => fun2.precio);
    return parseInt(variable2);
}

//console.log(valorProducto(productosTienda, "Carne"));

const mapeoCarne = filtroObjetos(productosTienda, "carnes");
const mapeoComida = filtroObjetos(productosTienda, "comida");
const mapeoFrutaVerdura = filtroObjetos(productosTienda, "frutas y verduras");
const mapeoPanaderia = filtroObjetos(productosTienda, "panaderia");
const mapeoFiambreria = filtroObjetos(productosTienda, "fieambreria");
const mapeoInstruCocina = filtroObjetos(productosTienda, "instrumentos de cocina");
const mapeoGolosinas = filtroObjetos(productosTienda, "golosinas");
const mapeoCafeteria = filtroObjetos(productosTienda, "cafeteria");
const mapeoHigiene = filtroObjetos(productosTienda, "higiene");




let carrito = 0;
let cantidadProductos = 0;
const productosBolsa= [];

let pedido = prompt("Bienvenido a nuestra tienda online. \nSeleccione el tipo de producto que desea comprar. \n\n Tipos: \n 1.carnes         2.comida       3.frutas y verduras \n 4.fiambreria   5.panaderia   6.instrumentos de cocina \n 7.higiene        8.golosinas   9.cafeteria");




while(pedido != "comprar"){
    let selecProducto = "";

    if(pedido == "carnes" || pedido == "comida" || pedido == "frutas y verduras" || pedido == "panaderia" || pedido == "fiambreria" || pedido == "instrumentos de cocina" || pedido == "higiene" || pedido == "golosinas" || pedido == "cafeteria"){
        switch(pedido){
            case "carnes":
                selecProducto = selecProducto + prompt("Carniceria:\n\n" + mapeoCarne.join("\n") + "\n\n Seleccione el producto");
                break;
            case "comida":
                selecProducto = selecProducto + prompt("Comida:\n\n" + mapeoComida.join("\n") + "\n\n Seleccione el producto");
                break;
            case "frutas y verduras":
                selecProducto = selecProducto + prompt("Frutas y verduras:\n\n" + mapeoFrutaVerdura.join("\n") + "\n\n Seleccione el producto");
                break;
            case "panaderia":
                selecProducto = selecProducto + prompt("Panaderia:\n\n" + mapeoPanaderia.join("\n") + "\n\n Seleccione el producto");
                break;
            case "fiambreria":
                selecProducto = selecProducto + prompt("Fiambreria:\n\n" + mapeoFiambreria.join("\n") + "\n\n Seleccione el producto");
                break;
            case "instrumentos de cocina":
                selecProducto = selecProducto + prompt("Instrumentos de cocina:\n\n" + mapeoInstruCocina.join("\n") + "\n\n Seleccione el producto");
                break;
            case "higiene":
                selecProducto = selecProducto + prompt("Higiene:\n\n" + mapeoHigiene.join("\n") + "\n\n Seleccione el producto");
                break;
            case "golosinas":
                selecProducto = selecProducto + prompt("Golosinas:\n\n" + mapeoGolosinas.join("\n") + "\n\n Seleccione el producto");
                break;
            case "cafeteria":
                selecProducto = selecProducto + prompt("Cafeteria:\n\n" + mapeoCafeteria.join("\n") + "\n\n Seleccione el producto");
                break;
        }
    }else{
        alert("Elija una de las opciones anteriores")
    }    
    
    if(selecProducto == "carne" || selecProducto == "pollo" || selecProducto == "pescado" || selecProducto == "lata de atun" || selecProducto == "lata de anchoas" || selecProducto == "aceite" || selecProducto == "mayonesa" || selecProducto == "fideos" || selecProducto == "miel" || selecProducto == "papa" || selecProducto == "tomate" || selecProducto == "lechuga" || selecProducto == "zanahoria" || selecProducto == "arroz" || selecProducto == "manzana" || selecProducto == "pan" || selecProducto == "galletitas" || selecProducto == "medialunas" || selecProducto == "queso" || selecProducto == "jamon" || selecProducto == "mortadela" || selecProducto == "chocolate" || selecProducto == "alfajor" || selecProducto == "chicle" || selecProducto == "caramelo" || selecProducto == "papel higienico" || selecProducto == "jabon" || selecProducto == "shampoo" || selecProducto == "acondicionador" || selecProducto == "perfume" || selecProducto == "azucar" || selecProducto == "te" || selecProducto == "cafe" || selecProducto == "yerba mate" || selecProducto == "leche" || selecProducto == "edulcorante" || selecProducto == "papel de cocina" || selecProducto == "repasador" || selecProducto == "esponja")
    {
        carrito = carrito + valorProducto(productosTienda, selecProducto);
        cantidadProductos = cantidadProductos + 1;
    }else{
        alert("No tenemos ese producto");
    }

    

    alert("Total:$" + carrito + "\n Productos: " + cantidadProductos);

    pedido = prompt('Seleccione el tipo de producto que desea comprar. \n\n Tipos: \n 1.Carnes         2.Comida       3.frutas y verduras \n 4.fiambreria   5.panaderia   6.instrumentos de cocina \n 7.higiene        8.golosinas   9.cafeteria\n\n Para finalizar la compra escribir "comprar" ');
}


if(pedido == "comprar"){
        alert("Total:$" + carrito + "\n Productos: " + cantidadProductos);
    }



