const Theme = require("../models").Theme;
const Section = require("../models").Section;
const Definition = require("../models").Definition;
const Article = require("../models").Article;
const Figure = require("../models").Figure;

module.exports = class ThemesRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Theme.create(formData)
        .then((theme) => {
          resolve(theme);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeAll() {
    return await new Promise((resolve, reject) => {
      Theme.findAll({
        include: [
          {
            model: Figure,
            as: "figure",
            limit: 1,
            attributes: ["picture"],
          },
        ],
        order: [["createdAt", "DESC"]],
      })
        .then((themes) => {
          resolve(themes);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeById(id) {
    return await new Promise((resolve, reject) => {
      Theme.findOne({
        where: { id },
        include: [
          {
            model: Section,
            as: "section",
            include: [
              {
                model: Definition,
                as: "definition",
              },
            ],
          },
          {
            model: Article,
            as: "article",
          },
          {
            model: Figure,
            as: "figure",
          },
        ],
      })
        .then((theme) => {
          resolve(theme);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async update(id, formData) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((theme) => {
          resolve(theme.update(formData));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((theme) => {
          resolve(theme.destroy());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
