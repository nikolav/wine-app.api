const assert = require('assert');
const app = require('../../src/app');

describe('\'main\' service', () => {
  it('registered the service', () => {
    const service = app.service('main');

    assert.ok(service, 'Registered the service');
  });
});
