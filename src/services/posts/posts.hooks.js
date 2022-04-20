

const beforeAuthPost = require('../../hooks/before-auth-post');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [beforeAuthPost()],
    update: [beforeAuthPost()],
    patch: [beforeAuthPost()],
    remove: [beforeAuthPost()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
