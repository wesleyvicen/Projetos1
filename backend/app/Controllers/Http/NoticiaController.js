"use strict";

const Noticia = use("App/Models/Noticia");

class NoticiaController {
  async index({ request, response, view }) {
    const noticia = await Noticia.all();

    return noticia;
  }

  async store({ request, response }) {}

  async show({ params, request, response, view }) {
    const noticia = await Noticia.find(params.id);
    return noticia;
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {
    const post = await Noticia.find(params.id);
    await post.delete();
  }
}

module.exports = NoticiaController;
