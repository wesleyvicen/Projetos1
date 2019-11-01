"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Anuncio extends Model {
  static fillable() {
    return ["urlImage", "localizacao"];
  }
}

module.exports = Anuncio;
