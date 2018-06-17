'use strict';

const fake = require('../__test__/test');

describe('testing fake function', () => {
  test('fake function', () => {
    expect(fake()).toBe('working');
  });
});
