const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const MemberController = require("./controllers/MemberController");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

routes.get("/members", MemberController.index);
routes.get("/members/:id", MemberController.show);
routes.post("/members", MemberController.store);
routes.put("/members/:id", MemberController.update);
routes.delete("/members/:id", MemberController.destroy);

module.exports = routes;
