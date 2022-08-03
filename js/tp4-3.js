/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área */

class Rectangulos {
  constructor(alto, ancho, p, a) {
    this.alto = alto;
    this.ancho = ancho;
    this.p = p;
    this.a = a;
  }
  crear() {
    this.alto = parseFloat(prompt("Ingrese el alto"));
    this.ancho = parseFloat(prompt("Ingrese el ancho"));
  }

  perimetro(alto, ancho) {
    this.p = 2 * (alto + ancho);
  }

  area(alto, ancho) {
    this.a = alto * ancho;
  }

  mostrar() {
    document.write(`
    <ul>
        <li>Alto: ${this.alto}</li>
        <li>Ancho: ${this.ancho}</li>
        <li>Perímetro: ${this.p}</li>
        <li>Área: ${this.a}</li>
    </ul>`);
  }
}

let rectangulo = new Rectangulos();

rectangulo.crear();
rectangulo.perimetro(rectangulo.alto, rectangulo.ancho);
rectangulo.area(rectangulo.alto, rectangulo.ancho);
rectangulo.mostrar();
