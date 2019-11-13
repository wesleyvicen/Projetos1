"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Noticia extends Model {
  static fillable() {
    return ["texto", "urlImage", "autor", "localizacao"];
  }
}

module.exports = Noticia;
