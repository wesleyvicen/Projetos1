"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnuncioSchema extends Schema {
  up() {
    this.create("anuncios", table => {
      table.increments();
      table.string("nameResp");
      table.string("urlImage");
      table.decimal("latitude", 9, 6).notNullable();
      table.decimal("longitude", 9, 6).notNullable();
      table.string("nincho");
      table.timestamps();
    });
  }

  down() {
    this.drop("anuncios");
  }
}

module.exports = AnuncioSchema;
