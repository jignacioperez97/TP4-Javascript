/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  mostrarGeneracion() {
    if (this.edad <= 28) {
      document.write(`Generacion Z - Irreverencia`);
    } else if (this.edad > 28 && this.edad <= 41) {
      document.write(`Generacion Y - Frustracion`);
    } else if (this.edad > 41 && this.edad <= 53) {
      document.write(`Generacion X - Obsesion por el exito`);
    } else if (this.edad > 53 && this.edad <= 73) {
      document.write(`Generacion Baby Boom - Ambicion`);
    } else {
      document.write(`Silent Generation - Austeridad`);
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert("Es mayor de edad");
    }
  }
  mostrarDatos() {
    document.write(`<ul>
    <li> Nombre: ${this.nombre}</li>
    <li> Edad: ${this.edad}</li>
    <li> DNI: ${this.dni}</li>
    <li> Sexo: ${this.sexo}</li>
    <li> Peso: ${this.peso}</li>
    <li> Altura: ${this.altura}</li>
    <li> Año de nacimiento: ${this.anoNacimiento}</li>
    </ul>`);
  }

  generaDNI() {
    this.dni = Math.floor(Math.random() * 99999999 + 0);
    return this.dni;
  }

  crear() {
    this.nombre = prompt("Ingrese nombre");
    this.edad = prompt("Ingrese edad");
    this.dni = parseFloat(prompt("Ingrese DNI"));
    this.sexo = prompt("Ingrese su sexo");
    this.peso = parseFloat(prompt("Ingrese su peso"));
    this.altura = parseFloat(prompt("Ingrese su altura"));
    this.anoNacimiento = parseFloat(prompt("Ingrese su año de nacimiento"));
  }
}

let persona = new Persona();

persona.crear();
persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.generaDNI();
persona.mostrarDatos();
