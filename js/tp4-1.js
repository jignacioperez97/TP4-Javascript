/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto. */

let auto = {
  color: ["azul", "gris", "rojo", "negro", "blanco"],
  marca: "Peugeot",
  modelo: 2019,
  estado: false,

  encendido: function () {
    auto.estado = true;
  },

  apagado: function () {
    auto.estado = false;
  },
};
