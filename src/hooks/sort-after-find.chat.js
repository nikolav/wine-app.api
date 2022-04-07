// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context.result;
    context.result.data = data.sort(sortDateDesc_);
    return context;
  };
};

function sortDateDesc_(a, b) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}
