const users = require('./users/users.service.js')
const products = require('./products/products.service.js');
const main = require('./main/main.service.js');
const chat = require('./chat/chat.service.js');
const posts = require('./posts/posts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(products);
  app.configure(main);
  app.configure(chat);
  app.configure(posts);
}
