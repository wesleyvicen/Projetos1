"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NoticiaSchema extends Schema {
  up() {
    this.create("noticias", table => {
      table.increments();
      table.string("texto");
      table.string("urlImage");
      table.string("autor");
      table.string("localizacao");
      table.timestamps();
    });
  }

  down() {
    this.drop("noticias");
  }
}

module.exports = NoticiaSchema;
