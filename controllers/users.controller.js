module.exports = (repository) => ({
  async signIn(req, res) {
    await repository
      .signIn(req.body)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  async signUp(req, res) {
    await repository
      .signUp(req.body)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
});
