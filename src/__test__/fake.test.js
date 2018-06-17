'use strict';

const fake = require('./../__test__/fake.test.js');

describe('testing fake function', () => {
  test('fake function', () => {
    expect(fake()).toBe('working');
  });
});
