const app = require('./app');

describe('start', () => {
  it('should return true', () => {
    expect(app.start()).toBe(true);
  });
});

