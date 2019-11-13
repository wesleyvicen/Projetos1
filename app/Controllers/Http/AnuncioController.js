"use strict";

const Anuncio = use("App/Models/Anuncio");

class AnuncioController {
  async index({ request, response, view }) {
    const anuncio = await Anuncio.all();
    return anuncio;
  }

  async store({ request, response }) {
    const data = request.only(Anuncio.fillable());
    const anuncio = await Anuncio.create(data);
    return anuncio;
  }

  async show({ params, request, response, view }) {
    const anuncio = await Anuncio.find(params.id);
    return anuncio;
  }

  async update({ params, request, response }) {
    const data = request.only(Anuncio.fillable());
    const anuncio = await Anuncio.find(params.id);

    anuncio.merge(data);
    await anuncio.save();
    return anuncio;
  }

  async destroy({ params, request, response }) {
    const anuncio = await Anuncio.find(params.id);
    await anuncio.delete();
  }
}

module.exports = AnuncioController;
