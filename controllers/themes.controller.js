module.exports = (repository) => ({
  
  async create(req, res) {
    await repository
      .create(req.body)
      .then((theme) => {
        res.status(200).send(theme);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  async readeAll(req, res) {
    await repository
      .readeAll()
      .then((themes) => {
        res.status(200).send(themes);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  async readeById(req, res) {
    await repository
      .readeById(req.params.id)
      .then((theme) => {
        if (theme) {
          res.status(200).json(theme);
        } else {
          res
            .status(404)
            .json({ message: `No entry found for id(${req.params.id})` });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },

  async update(req, res) {
    await repository
      .update(req.params.id, req.body)
      .then((theme) => {
        res.status(200).send(theme);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  async delete(req, res) {
    await repository
      .delete(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
});
