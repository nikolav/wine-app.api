// Initializes the `winereview` service on path `/winereview`
const { Winereview } = require('./winereview.class');
const createModel = require('../../models/winereview.model');
const hooks = require('./winereview.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/winereview', new Winereview(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('winereview');

  service.hooks(hooks);
};
