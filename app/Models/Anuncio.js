"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Anuncio extends Model {
  static fillable() {
    return ["nameResp", "urlImage", "latitude", "longitude", "nincho"];
  }
}

module.exports = Anuncio;
