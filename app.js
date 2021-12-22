const http = require("http");
const express = require("express");
const cors = require("cors");
require("colors");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;

app.use(cors());

const ThemesRepository = require("./repositories/ThemesRepository.pg");
const ArticlesRepository = require("./repositories/ArticlesRepository.pg");
const DefinitionsRepository = require("./repositories/DefinitionsRepository.pg");
const FiguresRepository = require("./repositories/FiguresRepository.pg");
const SectionsRepository = require("./repositories/SectionsRepository.pg");
const UsersRepository = require("./repositories/UsersRepository.pg");

const themeController = require("./controllers/themes.controller");
const articleController = require("./controllers/articles.controller");
const definitionController = require("./controllers/definitions.controller");
const figureController = require("./controllers/figures.controller");
const sectionController = require("./controllers/sections.controller");
const userController = require("./controllers/users.controller");

const themeRoutes = require("./routes/theme.route");
const articleRoutes = require("./routes/article.route");
const definitionRoutes = require("./routes/definition.route");
const figureRoutes = require("./routes/figure.route");
const sectionRoutes = require("./routes/section.route");
const userRoutes = require("./routes/users.route");

const themesRepository = new ThemesRepository();
const articlesRepository = new ArticlesRepository();
const definitionsRepository = new DefinitionsRepository();
const figuresRepository = new FiguresRepository();
const sectionsRepository = new SectionsRepository();
const usersRepository = new UsersRepository();

// ============================================================================================================================================================================
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");
// ============================================================================================================================================================================

// ============================================================================================================================================================================
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// ============================================================================================================================================================================

app.use("/themes", themeRoutes(express, themeController(themesRepository)));
app.use("/users", userRoutes(express, userController(usersRepository)));
app.use(
  "/articles",
  articleRoutes(express, articleController(articlesRepository))
);
app.use(
  "/definitions",
  definitionRoutes(express, definitionController(definitionsRepository))
);
app.use("/figures", figureRoutes(express, figureController(figuresRepository)));
app.use(
  "/sections",
  sectionRoutes(express, sectionController(sectionsRepository))
);

server.listen(port, () => {
  var desc = "Adresse du serveur: ";
  var adresse = ` http://localhost:${port}`.green.bold;
  console.log(
    `################################################################`.yellow
      .bold
  );
  console.log(desc + adresse);
  console.log(
    `################################################################`.yellow
      .bold
  );
});

module.exports = app;
