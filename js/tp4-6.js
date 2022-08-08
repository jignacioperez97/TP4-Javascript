/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  constructor(ISBN, titulo, autor, paginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  set modificarISBN(nuevoISBN) {
    this.ISBN = nuevoISBN;
  }
  set modificarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }
  set modificarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }
  set modificarPaginas(nuevoPaginas) {
    this.paginas = nuevoPaginas;
  }

  get mostrarISBN() {
    return this.ISBN;
  }

  get mostrarTitulo() {
    return this.titulo;
  }
  get mostrarAutor() {
    return this.autor;
  }

  get mostrarPaginas() {
    return this.paginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.mostrarTitulo} con ISBN ${this.mostrarISBN} creado por el autor ${this.mostrarAutor} tiene páginas ${this.mostrarPaginas}</p>`
    );
  }
}

const libro1 = new Libro(`1S2BNW`, `El Aleph`, `Jorge Luis Borges`, 357);
const libro2 = new Libro(`392GFN`, `Notas al Pie`, `Alejandro Dolina`, 261);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.paginas > libro2.paginas) {
  document.write(
    `El libro ${libro1.mostrarTitulo} tiene más páginas que el libro ${libro2.mostrarTitulo}.`
  );
} else {
  document.write(
    `El libro ${libro2.mostrarTitulo} tiene más páginas que el libro ${libro1.mostrarTitulo}.`
  );
}
