// Initializes the `chat` service on path `/chat`
const { Chat } = require('./chat.class');
const createModel = require('../../models/chat.model');
const hooks = require('./chat.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chat', new Chat(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chat');

  service.hooks(hooks);
};
