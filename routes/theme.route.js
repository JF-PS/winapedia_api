module.exports = (express, controller) => {
  const router = express.Router();

  router.post("/create", controller.create);

  router.get("/reade", controller.readeAll);

  router.get("/reade/:id", controller.readeById);

  router.put("/update/:id", controller.update);

  router.delete("/delete/:id", controller.delete);

  return router;
};
