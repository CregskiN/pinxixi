// server.js
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
// 根据db.json文件自动生成路由规则
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
const dbs = require("./postdb.js");
server.get("/api/productVariants", function (req, res) {
  console.log(req.query);
  switch (req.query.productId) {
    case "1":
      res.json(dbs.productVariants);
      break;
    case "2":
      res.json(dbs.productVariants);
      break;
    default:
      res.json(dbs.productVariants);
      break;
  }
});
server.get("/api/tabs", function (req, res) {
  res.json(dbs.tab);
});
server.get("/api/ads", function (req, res) {
  res.json(dbs.ads);
});
server.get("/api/products", function (req, res) {
  res.json(dbs.products);
});
server.get("/api/channels", function (req, res) {
  res.json(dbs.channels);
});
server.get('/api/banners', function(req, res) {
  res.json(dbs.imageSliders);
});
server.get("/api/profile", function (req, res) {
  res.json(dbs.profile);
});

server.post("/postdata", function (req, res) {
  res.send(dbs.postData);
});

server.use(router);
server.listen(8001, () => {
  console.log("JSON Server is running at port 8001");
});
