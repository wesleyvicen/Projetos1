"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnuncioSchema extends Schema {
  up() {
    this.create("anuncios", table => {
      table.increments();
      table.string("urlImage");
      table.string("localizacao");
      table.timestamps();
    });
  }

  down() {
    this.drop("anuncios");
  }
}

module.exports = AnuncioSchema;
