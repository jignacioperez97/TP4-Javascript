/* 4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    document.write(`
    <ul>
        <li>Código: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
    </ul>`);
  }
}

let productos = [];

productos[0] = new Producto(291, "Jorge", 251);
productos[1] = new Producto(713, "Paula", 288);
productos[2] = new Producto(358, "Nacho", 539);

productos[0].imprimeDatos();
productos[1].imprimeDatos();
productos[2].imprimeDatos();
