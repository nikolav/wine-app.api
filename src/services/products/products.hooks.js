const beforeCreateProducts = require("../../hooks/before-create.products");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [beforeCreateProducts()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
