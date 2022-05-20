// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, data, params } = context;
    // 'type',    'arguments',
    // 'service', 'app',
    // 'method',  'path',
    // 'data',    'params'


    // checks `/main` service to see if there is a `firebase/auth` user
    // id: `user-${uid}-firebase`; throws if it does not exist

    // const serviceMain = app.service("main");

    // const uid = await serviceMain.get(`user-${data.uid}-firebase`);
    // if (uid) goodToGo_ProcessData();



    // throw "@before-auth-post";

    return context;
  };
};
