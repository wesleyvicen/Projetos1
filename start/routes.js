"use strict";

const Route = use("Route");

Route.resource("anuncio", "AnuncioController").apiOnly();

Route.resource("noticia", "NoticiaController").apiOnly();

Route.post("/users", "UserController.create");
