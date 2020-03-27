"use strict";

const Route = use("Route");

Route.group(() => {
  Route.post("add", "AnuncioController.store").middleware("auth");
  Route.get("lists", "AnuncioController.index");
}).prefix("ad");

Route.group(() => {
  Route.post("add", "NoticiaController.store").middleware("auth");
  Route.get("lists", "NoticiaController.index");
}).prefix("news");

Route.post("/users", "UserController.create");

Route.post("/sessions", "SessionController.create");
