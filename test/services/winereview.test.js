const assert = require('assert');
const app = require('../../src/app');

describe('\'winereview\' service', () => {
  it('registered the service', () => {
    const service = app.service('winereview');

    assert.ok(service, 'Registered the service');
  });
});
