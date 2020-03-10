"use strict";

const Route = use("Route");

Route.group(() => {
  Route.post("add", "AnuncioController.store");
  Route.get("lists", "AnuncioController.index");
})
  .prefix("ad")
  .middleware("auth");

Route.group(() => {
  Route.post("add", "NoticiaController.store");
  Route.get("lists", "NoticiaController.index");
})
  .prefix("news")
  .middleware("auth");

Route.post("/users", "UserController.create");

Route.post("/sessions", "SessionController.create");
