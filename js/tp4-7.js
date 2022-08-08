/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
 */

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  get MostrarNombre() {
    return this.nombre;
  }
}

class Agenda {
  constructor(numero) {
    this.contactos = [];
    this.numeros = numero;
  }

  aniadirContacto(Contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre == Contacto.nombre) {
        return alert(`Ese contacto ya existe`);
      }
    }

    if (this.contactos.length == this.numeros) {
      alert(`AGENDA LLENA`);
    } else {
      this.contactos.push(Contacto);
      console.log(this.contactos[3]);
    }
  }

  mostrarDat() {
    for (let i = 0; i < this.contactos.length; i++) {
      document.write(
        `contacto = ${this.contactos[i].nombre} numero = ${this.contactos[i].telefono} <br>`
      );
      console.log(this.contactos[i]);
    }
  }

  existeContacto(Contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] == Contacto) {
        return document.write(`Si existe <br>`);
      }
    }
    return document.write(`No existe <br>`);
  }

  buscarContacto(nombre) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre == nombre) {
        return document.write(
          `Si existe y su numero es ${this.contactos[i].telefono} <br>`
        );
      }
    }
    return document.write(`No existe <br>`);
  }

  elminarContacto(Contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] == Contacto) {
        this.contactos.splice(i - 1, 1);
        document.write(`CONTACTO ELIMINADO <br>`);
      }
    }
  }

  // agendaLlena(){
  //     if(this.contactos.length == this.numeros){
  //             document.write(`Agenda llena`);
  //     }
  // }

  huecosLibres() {
    let n = this.numeros - this.contactos.length;
    console.log(n);
    return document.write(`Cantidad de huecos libres ${n}`);
  }
}

let x = new Agenda(parseInt(prompt(`Ingrese la cantidad de contactos`)));

let jorge = new Contacto(`Jorge`, 32312);

let lucas = new Contacto(`chris`, 3222312);
let paro = new Contacto(`carl`, 32312);

x.aniadirContacto(jorge);
x.aniadirContacto(lucas);
x.aniadirContacto(paro);
x.mostrarDat();
x.elminarContacto(jorge);
x.mostrarDat();
x.huecosLibres();
