// Initializes the `main` service on path `/main`
const { Main } = require("./main.class");
const createModel = require("../../models/main.model");
const hooks = require("./main.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/main", new Main(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("main");

  service.hooks(hooks);
};
