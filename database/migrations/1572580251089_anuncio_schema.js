"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnuncioSchema extends Schema {
  up() {
    this.create("anuncios", table => {
      table.increments();
      table.string("nameResp");
      table.string("urlImage");
      table.string("latitude");
      table.string("longitude");
      table.string("nincho");
      table.timestamps();
    });
  }

  down() {
    this.drop("anuncios");
  }
}

module.exports = AnuncioSchema;
